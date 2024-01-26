import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="h-dvh flex justify-center items-center gap-2">
      <Loader2 className="animate-spin" size={30} />
      <p>Carregando...</p>
    </div>
  );
}
