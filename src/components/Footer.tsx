
import { Github, Twitter, Linkedin } from 'lucide-react';

const SocialLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground transition-colors hover:text-foreground"
  >
    {children}
  </a>
);

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
          © {new Date().getFullYear()} Seu Negócio. Todos os direitos reservados.
        </p>
        <div className="flex items-center space-x-4">
          <SocialLink href="https://twitter.com">
            <Twitter className="h-5 w-5" />
          </SocialLink>
          <SocialLink href="https://github.com">
            <Github className="h-5 w-5" />
          </SocialLink>
          <SocialLink href="https://linkedin.com">
            <Linkedin className="h-5 w-5" />
          </SocialLink>
        </div>
      </div>
    </footer>
  );
}
