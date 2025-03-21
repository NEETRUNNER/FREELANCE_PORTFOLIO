import { useInView } from 'react-intersection-observer';

const FadeInSection = ({ children }) => {
  const { ref, inView } = useInView({
    initialInView: true, // Анимация сработает только один раз
    threshold: 0.01,    // Элемент должен быть на 10% виден в области просмотра
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-700 ease-in-out transform 
        ${inView ? 'opacity-100' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;