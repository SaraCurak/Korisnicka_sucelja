import React, { useState } from 'react';
import SignInModal from '../components/SignInModal';

const modal = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSignIn = () => {
    // Perform sign-in logic here
    // Close the modal when sign-in is successful
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>Sign In</button>
      <SignInModal isOpen={isModalOpen} onClose={closeModal} onSignIn={handleSignIn} />
    </div>
  );
}

export default modal;
