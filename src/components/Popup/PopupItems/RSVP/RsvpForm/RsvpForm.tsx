import React, { useState } from 'react';
import Styles from './RsvpForm.module.css'
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import { supabase } from '@/utils/supabaseClient';

interface RsvpFormProps {
    isAttending: boolean | null;
    onCancel: () => void;
}

const RsvpForm: React.FC<RsvpFormProps> = ({ isAttending, onCancel }) => {
    const [name, setName] = useState('');
    const [totalAttendance, setTotalAttendance] = useState(1);
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const { data, error } = await supabase
                .from('rsvp_and_wishes')
                .insert([
                    {
                        name,
                        isAttending,
                        totalAttendance: isAttending ? totalAttendance : 0,
                        message
                    }
                ]);

            if (error) throw error;

            console.log('RSVP submitted successfully:', data);
        } catch (error) {
            console.error('Error submitting RSVP:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className={Styles["rsvp-form"]} onSubmit={handleSubmit}>
            <div className={Styles["form-group"]}>
                <label htmlFor="name">Name*</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            {isAttending && (
                <div className={Styles["form-group"]}>
                    <label htmlFor="total-attendance">Total Attendance</label>
                    <select
                        id="total-attendance"
                        value={totalAttendance}
                        onChange={(e) => setTotalAttendance(Number(e.target.value))}
                    >
                        {[1, 2, 3, 4, 5].map(num => (
                            <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                        ))}
                    </select>
                </div>
            )}
            <div className={Styles["form-group"]}>
                <label htmlFor="message">Message</label>
                <textarea
                    rows={4}
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <div className={Styles["buttons-container"]}>
                <PrimaryButton text="Submit" type="submit" disabled={isSubmitting} />
                <PrimaryButton text="Cancel" onClick={onCancel} disabled={isSubmitting} />
            </div>
        </form>
    )
}

export default RsvpForm;