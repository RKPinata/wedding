import CardLayout from "@/components/CardLayout/CardLayout";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <main>
      <CardLayout />
      <Toaster
        position="top-center" 
        toastOptions={{
          style: {
            justifyContent: "center",
            fontFamily: 'Kathya Script',
            backgroundColor: '#c9a1db4d',
            fontSize: '1.5rem'
          }
        }}        
      />
    </main>
  );
}
