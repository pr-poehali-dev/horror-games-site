import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const featuredGames = [
    {
      title: "Resident Evil 4 Remake",
      rating: "9.5",
      genre: "Survival Horror",
      description: "Переосмысленная классика, которая устанавливает новые стандарты жанра",
      status: "Новый обзор"
    },
    {
      title: "Dead Space (2023)",
      rating: "9.0",
      genre: "Sci-Fi Horror",
      description: "Полное переосмысление космического кошмара с невероятной атмосферой",
      status: "Обновлено"
    },
    {
      title: "Phasmophobia",
      rating: "8.5",
      genre: "Co-op Horror",
      description: "Охота на призраков в команде - новый уровень страха и веселья",
      status: "Гайд"
    }
  ];

  const newsItems = [
    {
      title: "Silent Hill 2 Remake получил дату релиза",
      date: "2 дня назад",
      category: "Новости"
    },
    {
      title: "Новый трейлер Alan Wake 2 показал геймплей",
      date: "5 дней назад", 
      category: "Трейлеры"
    },
    {
      title: "Resident Evil Village получит VR-режим",
      date: "1 неделя назад",
      category: "Обновления"
    }
  ];

  const screenshots = [
    { game: "The Dark Pictures", mood: "atmospheric" },
    { game: "Outlast Trinity", mood: "terrifying" },
    { game: "Amnesia Collection", mood: "psychological" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="horror-gradient min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Navigation */}
        <nav className="relative z-20 flex items-center justify-between p-6">
          <div className="flex items-center space-x-2">
            <Icon name="Skull" size={32} className="text-primary animate-glow" />
            <h1 className="text-2xl font-bold blood-text">HORROR GAMES</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#reviews" className="hover:text-primary transition-colors">Обзоры</a>
            <a href="#news" className="hover:text-primary transition-colors">Новости</a>
            <a href="#guides" className="hover:text-primary transition-colors">Гайды</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
          </div>

          <Button variant="outline" className="glow-effect border-primary">
            <Icon name="Search" size={16} className="mr-2" />
            Поиск
          </Button>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
          <div className="text-center max-w-4xl animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 blood-text animate-glow">
              ХОРРОР ИГРЫ
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-foreground/80">
              Погрузись в мир ужасов и адреналина. Обзоры, новости и гайды по лучшим хоррор-играм на PC
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow-effect">
                <Icon name="GameController2" size={20} className="mr-2" />
                Последние обзоры
              </Button>
              <Button variant="outline" size="lg" className="border-primary">
                <Icon name="TrendingUp" size={20} className="mr-2" />
                Топ игры
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Reviews Section */}
      <section id="reviews" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 blood-text">Последние обзоры</h2>
            <p className="text-xl text-muted-foreground">Детальные разборы лучших хоррор-игр</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGames.map((game, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      {game.status}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={16} className="text-yellow-500 fill-current" />
                      <span className="font-bold text-lg">{game.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {game.title}
                  </CardTitle>
                  <CardDescription className="text-primary/80">
                    {game.genre}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{game.description}</p>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    Читать обзор
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 px-6 bg-card/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 blood-text">Новости</h2>
            <p className="text-xl text-muted-foreground">Свежие новости из мира хоррор-игр</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              <Icon name="ArrowRight" size={16} className="ml-2" />
              Все новости
            </Button>
          </div>
        </div>
      </section>

      {/* Screenshot Gallery Section */}
      <section id="gallery" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 blood-text">Галерея скриншотов</h2>
            <p className="text-xl text-muted-foreground">Атмосферные кадры из лучших хоррор-игр</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {screenshots.map((screenshot, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-horror-dark to-horror-shadow flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="relative z-10 text-center">
                    <Icon name="Image" size={48} className="text-primary/60 mb-2 mx-auto" />
                    <p className="text-sm text-primary/80 capitalize">{screenshot.mood}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-semibold">{screenshot.game}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" className="mr-4">
              <Icon name="Upload" size={16} className="mr-2" />
              Загрузить скриншот
            </Button>
            <Button size="lg" className="glow-effect">
              <Icon name="Eye" size={16} className="mr-2" />
              Смотреть все
            </Button>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section id="guides" className="py-20 px-6 bg-card/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 blood-text">Гайды и прохождения</h2>
            <p className="text-xl text-muted-foreground">Полезные советы для выживания в мире ужасов</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border p-8">
              <div className="flex items-center mb-4">
                <Icon name="BookOpen" size={32} className="text-primary mr-4" />
                <div>
                  <h3 className="text-2xl font-bold">Гайды для новичков</h3>
                  <p className="text-muted-foreground">Как не бояться и получать удовольствие</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Icon name="CheckCircle" size={16} className="text-primary mr-2" />
                  Настройки графики и звука
                </li>
                <li className="flex items-center">
                  <Icon name="CheckCircle" size={16} className="text-primary mr-2" />
                  Управление стрессом
                </li>
                <li className="flex items-center">
                  <Icon name="CheckCircle" size={16} className="text-primary mr-2" />
                  Первые шаги в жанре
                </li>
              </ul>
            </Card>
            
            <Card className="bg-card border-border p-8">
              <div className="flex items-center mb-4">
                <Icon name="Zap" size={32} className="text-primary mr-4" />
                <div>
                  <h3 className="text-2xl font-bold">Продвинутые техники</h3>
                  <p className="text-muted-foreground">Для опытных охотников за ужасами</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Icon name="CheckCircle" size={16} className="text-primary mr-2" />
                  Скоростное прохождение
                </li>
                <li className="flex items-center">
                  <Icon name="CheckCircle" size={16} className="text-primary mr-2" />
                  Поиск секретов и пасхалок
                </li>
                <li className="flex items-center">
                  <Icon name="CheckCircle" size={16} className="text-primary mr-2" />
                  Анализ сюжета
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/40 py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Skull" size={24} className="text-primary" />
            <span className="text-xl font-bold blood-text">HORROR GAMES</span>
          </div>
          <p className="text-muted-foreground mb-6">
            Твой проводник в мир ужасов и адреналина на PC
          </p>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="sm">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Discord
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Youtube" size={16} className="mr-2" />
              YouTube
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Twitter" size={16} className="mr-2" />
              Twitter
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;