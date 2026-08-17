import { useReveal } from "./useReveal";

/*
 * Animação de entrada.
 *
 * `immediate` é para conteúdo acima da dobra: em vez de esperar o
 * IntersectionObserver, anima já no primeiro paint via CSS. Sem isso o hero
 * nasce em branco até o observer disparar.
 */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  immediate = false,
  className = "",
  children,
  ...rest
}) {
  const [ref, visible] = useReveal(immediate);
  const style = delay ? { "--ld-delay": `${delay}ms` } : undefined;

  if (immediate) {
    return (
      <Tag className={`ld-reveal ld-reveal--now ${className}`.trim()} style={style} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      ref={ref}
      className={`ld-reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
