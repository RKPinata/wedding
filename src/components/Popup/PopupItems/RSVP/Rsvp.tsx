import React, { useState } from 'react';
import { Check, X } from "@phosphor-icons/react";
import Styles from "./Rsvp.module.css";
import RsvpForm from "./RsvpForm/RsvpForm";
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';

const Rsvp: React.FC = () => {
  const [isAttending, setIsAttending] = useState<boolean | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleAttendanceChange = (attending: boolean) => {
    setIsAttending(attending);
    setShowForm(true);
  };

  return (
    <div className={Styles["rsvp-container"]}>
      {!showForm ? (
        <div className={Styles["buttons-container"]}>
          <PrimaryButton
            icon={<Check size={20} />}
            text="Attending"
            onClick={() => handleAttendanceChange(true)}
          />
          <PrimaryButton
            icon={<X size={20} />}
            text="Not Attending"
            onClick={() => handleAttendanceChange(false)}
          />
        </div>
      ) : (
        <RsvpForm isAttending={isAttending} onCancel={() => setShowForm(false)} />
      )}
    </div>
  );
};

export default Rsvp;