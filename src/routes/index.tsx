import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { Logo } from "@/components/Logo";
import heroCity from "@/assets/image.png";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  component: SplashScreen,
});

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate({ to: "/login" });
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
     <div className="flex min-h-screen flex-col items-center justify-center bg-black">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Logo showText />
    </motion.div>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-4 text-white"
    >
      Connecting Citizens. Solving Problems.
    </motion.p>
  </div>
  );
}