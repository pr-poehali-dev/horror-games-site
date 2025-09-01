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
      description: "Переосмысленная классика, которая устанавливает новые стандарты жанра. Capcom превзошла сама себя, создав идеальный баланс между ностальгией и современными технологиями.",
      status: "Новый обзор",
      image: "/img/f96f6cfb-ef9c-469a-ba49-b42285edbd7d.jpg",
      details: {
        developer: "Capcom",
        releaseDate: "24 марта 2023",
        platforms: "PC, PS5, Xbox Series X/S",
        playTime: "15-20 часов",
        pros: ["Потрясающая графика", "Отличный геймплей", "Атмосферный саундтрек"],
        cons: ["Высокие системные требования", "Некоторые изменения в сюжете"]
      }
    },
    {
      title: "Dead Space (2023)",
      rating: "9.0",
      genre: "Sci-Fi Horror",
      description: "Полное переосмысление космического кошмара с невероятной атмосферой. EA Motive воссоздала легендарную игру с нуля, сохранив её душу но улучшив каждый аспект.",
      status: "Обновлено",
      image: "/img/377169a7-a843-466a-b10e-d962949e95e1.jpg",
      details: {
        developer: "EA Motive",
        releaseDate: "27 января 2023",
        platforms: "PC, PS5, Xbox Series X/S",
        playTime: "12-15 часов",
        pros: ["Невероятная атмосфера", "Улучшенная графика", "Отличный звуковой дизайн"],
        cons: ["Может быть слишком страшно для новичков", "Линейный геймплей"]
      }
    },
    {
      title: "Phasmophobia",
      rating: "8.5",
      genre: "Co-op Horror",
      description: "Охота на призраков в команде - новый уровень страха и веселья. Kinetic Games создала уникальный опыт кооперативного хоррора, который лучше всего играть с друзьями.",
      status: "Гайд",
      image: "/img/5f1bd8ef-144d-40a8-836e-839eafb935e3.jpg",
      details: {
        developer: "Kinetic Games",
        releaseDate: "18 сентября 2020",
        platforms: "PC, PlayStation 5, Xbox Series X/S",
        playTime: "Бесконечный",
        pros: ["Отличный кооператив", "Уникальная механика", "Постоянные обновления"],
        cons: ["Нужны друзья для игры", "Может надоесть со временем"]
      }
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
              <Card key={index} className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group overflow-hidden">
                {/* Game Image */}
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-primary/20 text-primary backdrop-blur">
                      {game.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/40 backdrop-blur rounded-full px-2 py-1">
                    <Icon name="Star" size={16} className="text-yellow-500 fill-current" />
                    <span className="font-bold text-white">{game.rating}</span>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {game.title}
                  </CardTitle>
                  <CardDescription className="text-primary/80">
                    {game.genre} • {game.details?.developer}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">{game.description}</p>
                  
                  {/* Game Details */}
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Дата выхода:</span>
                      <span>{game.details?.releaseDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Время игры:</span>
                      <span>{game.details?.playTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Платформы:</span>
                      <span className="text-right">{game.details?.platforms}</span>
                    </div>
                  </div>

                  {/* Pros and Cons */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <div className="text-green-400 font-semibold mb-1 flex items-center">
                        <Icon name="Plus" size={12} className="mr-1" />
                        Плюсы
                      </div>
                      <ul className="space-y-1">
                        {game.details?.pros.slice(0, 2).map((pro, i) => (
                          <li key={i} className="text-muted-foreground">• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-red-400 font-semibold mb-1 flex items-center">
                        <Icon name="Minus" size={12} className="mr-1" />
                        Минусы
                      </div>
                      <ul className="space-y-1">
                        {game.details?.cons.slice(0, 2).map((con, i) => (
                          <li key={i} className="text-muted-foreground">• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon name="BookOpen" size={16} className="mr-2" />
                    Читать полный обзор
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