import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn.js';

const variants = {
  solid: 'btn-solid',
  outline: 'btn-outline',
  ghost: 'btn-base hover:bg-slate-100 dark:hover:bg-slate-800'
};

export const Button = ({ as: Comp = 'button', variant = 'solid', className, children, whileHover = { scale: 1.03 }, whileTap = { scale: 0.97 }, ...props }) => {
  const base = variants[variant] || variants.solid;
  return (
    <motion.div whileHover={whileHover} whileTap={whileTap} className="inline-flex">
      <Comp className={cn(base, className)} {...props}>{children}</Comp>
    </motion.div>
  );
};

export default Button;
