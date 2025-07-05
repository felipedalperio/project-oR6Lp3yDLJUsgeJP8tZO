import React from 'react';

const ItemsCard = () => {
  return (
    <section
  id="comodidades"
  className="py-20 bg-[#fdf5d6] text-[#333333]"
>
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#1c3c34] mb-4">
        <SafeText text="Por que escolher a BullDash?<br>" />
      </h2>
      <div className="w-20 h-1 bg-[#8B5E3C] mx-auto mb-8" />
      <p className="text-[#333333] max-w-2xl mx-auto">Oferecemos tudo que você precisa para ter o controle da sua vida financeira.</p>
    </div>
    <div className="grid gap-[2rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      <div className="bg-[#ffffff] rounded-xl p-6 shadow-lg text-center">
        <i className="fa-solid fa-wifi text-4xl mb-4 text-[#1c3c34]" />
        <h3 className="text-xl font-semibold mb-2">
          <span>Wi-Fi Grátis</span>
        </h3>
        <p className="text-[#333333]">Conexão de alta velocidade em toda a pousada.</p>
      </div>
      <div className="bg-[#ffffff] rounded-xl p-6 shadow-lg text-center">
        <i className="fa-solid fa-utensils text-4xl mb-4 text-[#1c3c34]" />
        <h3 className="text-xl font-semibold mb-2">
          <span>Restaurante</span>
        </h3>
        <p className="text-[#333333]">Comida caseira com ingredientes locais.</p>
      </div>
      <div className="bg-[#ffffff] rounded-xl p-6 shadow-lg text-center">
        <i className="fa-solid fa-dumbbell text-4xl mb-4 text-[#1c3c34]" />
        <h3 className="text-xl font-semibold mb-2">
          <span>Academia</span>
        </h3>
        <p className="text-[#333333]">Equipamentos modernos à disposição dos hóspedes.</p>
      </div>
      <div className="bg-[#ffffff] rounded-xl p-6 shadow-lg text-center">
        <i className="fa-solid fa-spa text-4xl mb-4 text-[#1c3c34]" />
        <h3 className="text-xl font-semibold mb-2">
          <span>Spa Relaxante</span>
        </h3>
        <p className="text-[#333333]">Massagens, banhos e terapias holísticas.</p>
      </div>
    </div>
  </div>
</section>
  );
};

export default ItemsCard;