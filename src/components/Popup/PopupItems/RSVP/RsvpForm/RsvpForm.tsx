import React, { useState } from 'react';
import Styles from './RsvpForm.module.css'
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';

interface RsvpFormProps {
  isAttending: boolean | null;
  onCancel: () => void;
}

const RsvpForm: React.FC<RsvpFormProps> = ({ isAttending, onCancel }) => {
    const [name, setName] = useState('');
    const [totalAttendance, setTotalAttendance] = useState(1);
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ name, totalAttendance, message });
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
                <PrimaryButton text="Submit" type="submit" />
                <PrimaryButton text="Cancel" onClick={onCancel} />
            </div>
        </form>
    )
}

export default RsvpForm;