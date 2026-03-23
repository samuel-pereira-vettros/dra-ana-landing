import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Users, Stethoscope, ArrowRight } from "lucide-react";

/**
 * Design Philosophy: Healthcare Professional
 * - Calming teal/turquoise palette for trust and healthcare
 * - Elegant typography with Playfair Display for headings
 * - Clean, spacious layout with strategic whitespace
 * - Subtle shadows and soft gradients for depth
 * - Professional yet warm and welcoming tone
 * - Focus: Medical consultations and perinatal mental health
 */

const whatsappNumber = "5516981008117";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá%20Dra.%20Ana,%20gostaria%20de%20agendar%20uma%20consulta.`;
const instagramMaternally = "https://www.instagram.com/maternamente8";
const instagramDraAna = "https://www.instagram.com/draana.aps";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg text-foreground">Dra. Ana</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={instagramMaternally} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/></svg>
            </a>
            <a href={instagramDraAna} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/></svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full">
                <span className="text-sm font-medium text-primary">Medicina de Família e Comunidade</span>
              </div>
              <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight text-foreground">
                Acolhimento e cuidado integral para você e sua família
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Especialista em saúde mental perinatal. Consultas online humanizadas com escuta atenta às suas necessidades de saúde.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 w-full sm:w-auto">
                    <MessageCircle className="w-4 h-4" />
                    Agendar Consulta no WhatsApp
                  </Button>
                </a>
              </div>
              <div className="pt-4 space-y-2 text-sm text-muted-foreground">
                <p>CRM: 207664 | RQE: 102123</p>
                <p>Médica de Família e Comunidade</p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663107118368/EjitbCewVGpk378kgTBwvX/dra-ana-carolina_f930ff4e.webp"
                alt="Dra. Ana Carolina Siqueira"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 text-foreground">
              Minhas Áreas de Atuação
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cuidado especializado em diferentes aspectos da sua saúde
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-foreground">
                Saúde Mental Perinatal
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Cuidado especializado com saúde mental antes, durante e depois da gestação. Acolhimento para depressão pós-parto, ansiedade e adaptação à maternidade.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Stethoscope className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-foreground">
                Consultas Online
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Atendimento médico prático e acessível para todo o Brasil. Consultas humanizadas com escuta atenta às suas necessidades de saúde.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
                Sobre Mim
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sou Médica de Família e Comunidade com especialização em saúde mental perinatal. Minha trajetória profissional é marcada pela paixão em cuidar de pessoas em todas as fases da vida, com especial atenção ao período gestacional e puerperal.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Trabalho com uma abordagem humanizada, acreditando que o cuidado integral passa pela escuta atenta, compreensão das necessidades individuais e acolhimento genuíno.
              </p>
              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">Formação em Medicina de Família e Comunidade</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">Especialista em Saúde Mental Perinatal</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-display font-bold text-primary mb-2">100%</div>
                  <p className="text-muted-foreground">Foco em Cuidado Humanizado</p>
                </div>
                <div className="h-px bg-border" />
                <div className="text-center">
                  <div className="text-4xl font-display font-bold text-primary mb-2">Online</div>
                  <p className="text-muted-foreground">Consultas Acessíveis</p>
                </div>
                <div className="h-px bg-border" />
                <div className="text-center">
                  <div className="text-4xl font-display font-bold text-primary mb-2">24/7</div>
                  <p className="text-muted-foreground">Disponibilidade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 text-foreground">
              Acompanhe nas Redes Sociais
            </h2>
            <p className="text-lg text-muted-foreground">
              Conteúdo sobre saúde mental e bem-estar
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Instagram 1 */}
            <a
              href={instagramMaternally}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all border border-border hover:border-primary"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground">@maternamente8</h3>
                  <p className="text-sm text-muted-foreground">Saúde Mental e Maternidade</p>
                </div>
                <svg className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/></svg>
              </div>
              <p className="text-muted-foreground mb-4">
                Conteúdo especializado sobre saúde mental perinatal, dicas de bem-estar e acolhimento para mães.
              </p>
              <div className="flex items-center gap-2 text-primary font-medium">
                Seguir <ArrowRight className="w-4 h-4" />
              </div>
            </a>

            {/* Instagram 2 */}
            <a
              href={instagramDraAna}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all border border-border hover:border-primary"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground">@draana.aps</h3>
                  <p className="text-sm text-muted-foreground">Vida Pessoal e Profissional</p>
                </div>
                <svg className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/></svg>
              </div>
              <p className="text-muted-foreground mb-4">
                Reflexões sobre vida pessoal, bem-estar profissional e desenvolvimento pessoal.
              </p>
              <div className="flex items-center gap-2 text-primary font-medium">
                Seguir <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6 text-foreground">
            Pronto para cuidar da sua saúde?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato via WhatsApp para agendar sua consulta online. Estou aqui para ajudar com acolhimento e profissionalismo.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <MessageCircle className="w-4 h-4" />
              Agendar Consulta no WhatsApp
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Heart className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-display font-bold text-foreground">Dra. Ana</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Medicina de Família e Comunidade com foco em saúde mental perinatal.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Saúde Mental Perinatal</li>
                <li>Consultas Online</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Informações</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>CRM: 207664</li>
                <li>RQE: 102123</li>
                <li>Médica de Família e Comunidade</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © 2026 Dra. Ana Carolina Siqueira. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
