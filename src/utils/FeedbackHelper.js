
export const getFeedback = (score) => {

  const safeScore = Number(score) || 0;

  if (safeScore >= 8) {
    return {
      tier: "Expert",
      label: "Excellent",
      styles: "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-emerald-200",
      textClass: "text-emerald-700",
      description: "You demonstrated excellent performance with strong control over pronunciation and fluency."
    };
  } 
  
  if (safeScore >= 6) {
    return {
      tier: "Competent",
      label: "Good",
      styles: "bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-orange-200",
      textClass: "text-amber-700",
      description: "A good performance with minor inaccuracies. Focus on complex sentence structures."
    };
  }
  return {
    tier: "Novice",
    label: "Needs Improvement",
    styles: "bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-rose-200",
    textClass: "text-rose-700",
    description: "Your speech needs improvement. Focus on basic grammar structure and vocabulary range."
  };
};