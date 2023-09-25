'use client';

import { useEffect } from 'react';
import { useStore } from 'zustand';

import { Modal } from '@/components/ui/modal';
import { useStoreModal } from '@/hooks/use-store-modal';
import { UserButton } from '@clerk/nextjs';

const SetupPage = () => {
  //Both methods work well....
  const { isOpen, onOpen } = useStoreModal();
  // const onOpen = useStoreModal((state) => state.onOpen);
  // const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return <div className='p-4'>Root page</div>;
};

export default SetupPage;
