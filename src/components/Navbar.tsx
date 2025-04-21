
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo-b.svg" alt="Логотип колледжа" className="h-8 w-auto" />
          <span className="text-xl font-bold">Колледж Знаний</span>
        </div>

        {/* Десктопное меню */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Главная
          </Link>
          <Link to="/#about" className="text-sm font-medium hover:text-primary transition-colors">
            О нас
          </Link>
          <Link to="/#programs" className="text-sm font-medium hover:text-primary transition-colors">
            Программы
          </Link>
          <Link to="/#features" className="text-sm font-medium hover:text-primary transition-colors">
            Преимущества
          </Link>
          <Link to="/#contacts" className="text-sm font-medium hover:text-primary transition-colors">
            Контакты
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm">
            Войти
          </Button>
          <Button size="sm">Подать заявку</Button>
        </div>

        {/* Мобильная кнопка меню */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Меню"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden border-b bg-background">
          <nav className="flex flex-col py-4 px-6 space-y-4">
            <Link to="/" className="text-base font-medium hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/#about" className="text-base font-medium hover:text-primary transition-colors">
              О нас
            </Link>
            <Link to="/#programs" className="text-base font-medium hover:text-primary transition-colors">
              Программы
            </Link>
            <Link to="/#features" className="text-base font-medium hover:text-primary transition-colors">
              Преимущества
            </Link>
            <Link to="/#contacts" className="text-base font-medium hover:text-primary transition-colors">
              Контакты
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="w-full">
                Войти
              </Button>
              <Button className="w-full">Подать заявку</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
