import React, { useEffect, useState } from 'react';
import Typography from '../Typography/Typography';
import Styles from './Wishes.module.css';
import { supabase } from '@/utils/supabaseClient';

interface MessageType {
    message: string;
    name: string;
}

// Define a type for Supabase errors
interface SupabaseError {
    message: string;
    details: string;
    hint: string;
    code: string;
}

const Wishes: React.FC = () => {
    const [messages, setMessages] = useState<MessageType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const { data, error } = await supabase
                    .from('rsvp_and_wishes')
                    .select('name, message');

                if (error) throw error;

                setMessages(data || []);
            } catch (error: unknown) {
                // Type guard to handle different error types
                if (error instanceof Error) {
                    console.error('Error fetching messages:', error.message);
                    setError(error.message);
                } else if (typeof error === 'object' && error !== null) {
                    const supabaseError = error as SupabaseError;
                    console.error('Supabase error:', supabaseError.message);
                    setError(supabaseError.message);
                } else {
                    console.error('Unknown error occurred');
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchMessages();
    }, []);

    if (loading) return <div>Loading wishes...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className={Styles["wishes-container"]}>
            <Typography fontSize='1.2rem'>WISHES</Typography>
            <div className={Styles["wishes-area"]}>
                {messages.length > 0 ? (
                    messages.map((item, index) => (
                        <div className={Styles["wish-items"]} key={index}>
                            <Typography
                                className={Styles["message"]}
                                font='Kathya Script'
                                fontSize='1.2rem'
                            >
                                {item.message}
                            </Typography>
                            <Typography 
                                className="sender"
                                fontWeight={600}
                            >
                                {item.name}
                            </Typography>
                        </div>
                    ))
                ) : (
                    <Typography>No wishes yet.</Typography>
                )}
            </div>
        </div>
    );
};

export default Wishes;