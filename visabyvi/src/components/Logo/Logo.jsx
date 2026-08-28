/**
 * Logo
 * "VisabyVi" fixo (wordmark) + "Vitória Macedo" com animação de escrita:
 * um reveal em clip-path simula a tinta desenhando o texto da esquerda
 * pra direita, como se estivesse sendo assinado na hora.
 * Pra reajustar velocidade/atraso, mexa em --signature-dur e --signature-delay.
 */
const Logo = ({ variant = 'full', className = '' }) => {
  return (
    <div className={`logo logo--${variant} ${className}`}>
      <span className="logo__brand">VisabyVi</span>
      <span className="logo__signature-wrap">
      </span>
    </div>
  );
};

export default Logo;