import { ItemContact } from './item-contact';

const Contact = () => {
  return (
    <section className="hidden md:block container">
      <div className="p-4">
        <h2 className="text-center font-bold text-2xl lg:text-4xl p-3">Nos Contacte</h2>
        <p className="text-center lg:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex py-10 gap-x-4 text-xs xl:text-sm">
        <ItemContact
          src="/images/icons/whatsapp.svg"
          alt="Icone do WatsApp"
          title="WatsApp"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero."
          link="https://wa.me/5554991980349?text="
          textLink="(54)99198-0349"
        />
        <ItemContact
          src="/images/icons/instagram.svg"
          alt="Icone do Instagram"
          title="Instagram"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero."
          link="https://www.instagram.com/psi.leonardobaccega?igsh=emdmNjJsaG44NWc5"
          textLink="psi.leonardobaccega"
        />
        <ItemContact
          src="/images/icons/whatsapp.svg"
          alt="sasas"
          title="E-mail"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero."
          link="#"
          textLink="hello@relume.io"
        />
      </div>
    </section>
  );
};

export { Contact };
