"use client"
import styles from './layout.module.css'
import Sidebar from '@/components/Sidebar';
import ProtectedRoute from '@/components/ProtectedRoute'
import { useContext, useEffect } from 'react';
import CustomUserContext from '@components/GlobalUserContext';
import { useRouter } from 'next/navigation';

const layout = ({ children }) => {
  const router = useRouter()
  const { globalUserData, setGlobalUserData } = useContext(CustomUserContext)

  useEffect(() => {
    if(globalUserData.username && !globalUserData.adminAuthId){
      router.push('/dashboard/admin/sign-in')
    }
  }, [globalUserData])

  return (
    <ProtectedRoute>
      <div className={styles.layout}>
        <Sidebar />
        <div className={styles.children}>
          {children}
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default layout;
