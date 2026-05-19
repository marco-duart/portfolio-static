import { DefaultTheme } from "styled-components";

export const light: DefaultTheme = {
  name: "light",
  colors: {
    // Cores Primárias - Vibrantes
    primary: "#00D9FF", // Cyan vibrante
    primaryLight: "#00F5FF", // Cyan claro
    primaryDark: "#0099CC", // Cyan escuro
    
    // Cores Secundárias - Acentos
    accent: "#FF006E", // Pink/Magenta
    accentLight: "#FF4D8F", // Pink claro
    
    // Cores de Fundo
    background: "#1A1A2E", // Fundo principal profundo
    backgroundSecondary: "#16213E", // Fundo secundário
    backgroundTertiary: "#0F3460", // Terceiro nível
    
    // Destaques
    highlight: "#FFD60A", // Dourado
    
    // Cores Funcionais
    edit: "#00D9FF", // Atualizado para cyan
    delete: "#FF006E", // Atualizado para pink
    cancel: "#A0AEC0",
    create: "#00D9FF", // Atualizado para cyan
    save: "#FF006E", // Atualizado para pink
    
    // Cores de Texto
    text: "#E8E8E8",
    textSecondary: "#A8A8A8",
    
    // Status
    error: "#FF006E",
    success: "#00D9FF",
    warning: "#FFD60A",

    // Legacy aliases (for existing components)
    secundary: "#16213E",
    tertiary: "#0F3460",
    close: "#95a5a6",
    
    // Utilitários
    black: "#000000",
    white: "#FFFFFF",
    gray: "#6B7280",
    lightGray: "#D3D3D3",
  },
  fonts: {
    playWrite: "'Playwrite IT Moderna', cursive",
    openSans: "'Open Sans', sans-serif",
    candal: "'Candal', sans-serif",
    poppins: "'Poppins', sans-serif",
  },
  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "3.75rem", // 60px
  },
  borderRadius: {
    none: "0",
    xs: "0.25rem",
    sm: "0.5rem",
    base: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    full: "9999px",
  },
  boxShadow: {
    none: "none",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    neon: "0 0 20px rgba(0, 217, 255, 0.4)",
    neonPink: "0 0 20px rgba(255, 0, 110, 0.4)",
  },
  breakpoints: {
    xs: "0px",
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1440px",
  },
};
