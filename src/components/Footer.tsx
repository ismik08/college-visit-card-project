
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer id="contacts" className="bg-slate-900 text-white py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/logo-b.svg" alt="Логотип колледжа" className="h-8 w-auto brightness-0 invert" />
              <span className="text-xl font-bold">Колледж Знаний</span>
            </div>
            <p className="text-slate-400">
              Качественное образование для успешного будущего. Присоединяйтесь к нам!
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full text-slate-400 hover:text-white hover:bg-slate-800">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-slate-400 hover:text-white hover:bg-slate-800">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-slate-400 hover:text-white hover:bg-slate-800">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">Главная</Link>
              </li>
              <li>
                <Link to="/#about" className="text-slate-400 hover:text-white transition-colors">О нас</Link>
              </li>
              <li>
                <Link to="/#programs" className="text-slate-400 hover:text-white transition-colors">Программы</Link>
              </li>
              <li>
                <Link to="/#features" className="text-slate-400 hover:text-white transition-colors">Преимущества</Link>
              </li>
              <li>
                <Link to="/#contacts" className="text-slate-400 hover:text-white transition-colors">Контакты</Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Абитуриентам</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">Правила приема</Link>
              </li>
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">Подача документов</Link>
              </li>
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">Дни открытых дверей</Link>
              </li>
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">Задать вопрос</Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                <span className="text-slate-400">г. Москва, ул. Примерная, д. 123</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-slate-400" />
                <span className="text-slate-400">+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-slate-400" />
                <span className="text-slate-400">info@college-example.ru</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-slate-800 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Колледж Знаний. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
