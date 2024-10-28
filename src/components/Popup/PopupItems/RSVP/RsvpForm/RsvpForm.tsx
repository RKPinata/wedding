import React, { useReducer } from 'react';
import Styles from './RsvpForm.module.css'
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import { supabase } from '@/utils/supabaseClient';
import { toast } from 'sonner';

interface RsvpFormProps {
    isAttending: boolean | null;
    onCancel: () => void;
    onClose: () => void;
}

// Define the shape of our state
interface RsvpFormState {
    name: string;
    totalAttendance: number;
    message: string;
    isSubmitting: boolean;
}

// Define action types for the reducer
type Action =
    | { type: 'SET_NAME'; payload: string }
    | { type: 'SET_TOTAL_ATTENDANCE'; payload: number }
    | { type: 'SET_MESSAGE'; payload: string }
    | { type: 'SET_IS_SUBMITTING'; payload: boolean }
    | { type: 'RESET_FORM' };

// Initial state for the reducer
const initialState: RsvpFormState = {
    name: '',
    totalAttendance: 1,
    message: '',
    isSubmitting: false,
};

// Reducer function
const formReducer = (state: RsvpFormState, action: Action): RsvpFormState => {
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload };
        case 'SET_TOTAL_ATTENDANCE':
            return { ...state, totalAttendance: action.payload };
        case 'SET_MESSAGE':
            return { ...state, message: action.payload };
        case 'SET_IS_SUBMITTING':
            return { ...state, isSubmitting: action.payload };
        case 'RESET_FORM':
            return initialState;
        default:
            return state;
    }
};

const RsvpForm: React.FC<RsvpFormProps> = ({ isAttending, onCancel, onClose }) => {
    const [state, dispatch] = useReducer(formReducer, initialState);
    const { name, totalAttendance, message, isSubmitting } = state;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        dispatch({ type: 'SET_IS_SUBMITTING', payload: true });

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
            dispatch({ type: 'RESET_FORM' });
            onClose();
        } catch (error) {
            console.error('Error submitting RSVP:', error);
        } finally {
            dispatch({ type: 'SET_IS_SUBMITTING', payload: false });
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
                    onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
                    required
                />
            </div>
            {isAttending && (
                <div className={Styles["form-group"]}>
                    <label htmlFor="total-attendance">Total Attendance</label>
                    <select
                        id="total-attendance"
                        value={totalAttendance}
                        onChange={(e) => dispatch({ type: 'SET_TOTAL_ATTENDANCE', payload: Number(e.target.value) })}
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
                    onChange={(e) => dispatch({ type: 'SET_MESSAGE', payload: e.target.value })}
                />
            </div>
            <div className={Styles["buttons-container"]}>
                <PrimaryButton 
                    text="Submit" 
                    type="submit"
                    disabled={isSubmitting} 
                    onClick={() => toast('Thank you for your wishes 🥰')}/>
                <PrimaryButton text="Cancel" onClick={onCancel} disabled={isSubmitting} />
            </div>
        </form>
    );
}

export default RsvpForm;
