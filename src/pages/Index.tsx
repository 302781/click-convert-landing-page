
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <main className="flex-grow">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
                Transforme Visitantes em Clientes
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Crie uma primeira impressão inesquecível com uma landing page profissional, projetada para converter e otimizada para o sucesso.
              </p>
              <div className="pt-4">
                <ContactForm />
              </div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070&auto=format&fit=crop"
                alt="Pessoa trabalhando em um laptop"
                className="rounded-lg shadow-2xl object-cover w-full h-full"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
