/**
 * Logo oficial ALA Turismo (arquivo enviado pela empresa, recortado e com fundo removido).
 * tone="light": versão para fundos escuros (rota e "turismo" em branco).
 * tone="dark": versão original para fundos claros.
 */
export function Logo({ tone = "light", className = "" }: { tone?: "light" | "dark"; className?: string }) {
  const src = tone === "light" ? "/brand/logo-light.png" : "/brand/logo-color.png";
  return <img src={src} alt="ALA Turismo" width={640} height={515} decoding="async" className={className} />;
}
