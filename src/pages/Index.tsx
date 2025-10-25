import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [conversionRate, setConversionRate] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount(prev => Math.min(prev + Math.floor(Math.random() * 50), 15847));
      setConversionRate(prev => Math.min(prev + Math.random() * 0.5, 24.8));
      setActiveUsers(prev => Math.min(prev + Math.floor(Math.random() * 10), 1243));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: 'Target',
      title: 'Таргетированная реклама',
      description: 'Точное попадание в вашу целевую аудиторию через все популярные площадки',
      features: ['Яндекс.Директ', 'Google Ads', 'VK Реклама']
    },
    {
      icon: 'BarChart3',
      title: 'Аналитика и отчёты',
      description: 'Детальная статистика в реальном времени с понятными дашбордами',
      features: ['Визуализация данных', 'A/B тестирование', 'ROI мониторинг']
    },
    {
      icon: 'Zap',
      title: 'Автоматизация',
      description: 'Умные алгоритмы для оптимизации рекламных кампаний 24/7',
      features: ['Авто-ставки', 'Умное распределение', 'Оптимизация бюджета']
    },
    {
      icon: 'TrendingUp',
      title: 'SEO продвижение',
      description: 'Вывод сайта в топ поисковых систем по целевым запросам',
      features: ['Аудит сайта', 'Контент-маркетинг', 'Линкбилдинг']
    }
  ];

  const testimonials = [
    {
      name: 'Алексей Морозов',
      company: 'TechStart',
      rating: 5,
      text: 'ROI вырос на 340% за первые 3 месяца. Отличная команда и прозрачная аналитика!'
    },
    {
      name: 'Мария Соколова',
      company: 'BeautyBox',
      rating: 5,
      text: 'Лучшее агентство с которым работали. Конверсия увеличилась в 2.5 раза.'
    },
    {
      name: 'Дмитрий Петров',
      company: 'AutoPro',
      rating: 5,
      text: 'Профессиональный подход и результаты, которые можно увидеть уже в первый месяц.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Старт',
      price: '29 990',
      period: 'месяц',
      features: [
        'До 3 рекламных площадок',
        'Базовая аналитика',
        'Email поддержка',
        'Ежемесячные отчёты'
      ],
      popular: false
    },
    {
      name: 'Профи',
      price: '59 990',
      period: 'месяц',
      features: [
        'Все рекламные площадки',
        'Расширенная аналитика',
        'Приоритетная поддержка 24/7',
        'Еженедельные отчёты',
        'A/B тестирование',
        'Личный менеджер'
      ],
      popular: true
    },
    {
      name: 'Корпоративный',
      price: 'По запросу',
      period: '',
      features: [
        'Индивидуальная стратегия',
        'Выделенная команда',
        'Кастомные интеграции',
        'SLA 99.9%',
        'Консалтинг и обучение',
        'Dedicated infrastructure'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg gradient-purple flex items-center justify-center">
                <Icon name="Rocket" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold gradient-text">AdPro</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#services" className="text-foreground/80 hover:text-foreground transition">Услуги</a>
              <a href="#testimonials" className="text-foreground/80 hover:text-foreground transition">Отзывы</a>
              <a href="#pricing" className="text-foreground/80 hover:text-foreground transition">Цены</a>
            </div>
            <Button className="gradient-purple text-white border-0">
              Начать
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="gradient-purple text-white border-0 px-4 py-1">
                <Icon name="Sparkles" size={16} className="mr-2" />
                Платформа №1 в России
              </Badge>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                Реклама, которая <span className="gradient-text">работает</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Управляйте рекламными кампаниями с помощью AI-аналитики и получайте результаты в реальном времени
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="gradient-purple text-white border-0 text-lg px-8">
                  Начать бесплатно
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Play" className="mr-2" size={20} />
                  Смотреть демо
                </Button>
              </div>
            </div>

            <Card className="p-8 bg-card/50 backdrop-blur border-border animate-scale-in">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Аналитика в реальном времени</h3>
                  <Badge variant="outline" className="gradient-purple text-white border-0">
                    <Icon name="Activity" size={14} className="mr-1" />
                    Live
                  </Badge>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Icon name="Users" size={16} />
                      Посетители
                    </div>
                    <div className="text-3xl font-bold gradient-text">
                      {visitorCount.toLocaleString()}
                    </div>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Icon name="TrendingUp" size={16} />
                      Конверсия
                    </div>
                    <div className="text-3xl font-bold gradient-text">
                      {conversionRate.toFixed(1)}%
                    </div>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Icon name="Zap" size={16} />
                      Онлайн
                    </div>
                    <div className="text-3xl font-bold gradient-text">
                      {activeUsers}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Яндекс.Директ</span>
                    <span className="font-semibold">68%</span>
                  </div>
                  <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                    <div className="h-full gradient-purple w-[68%] rounded-full animate-slide-up"></div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Google Ads</span>
                    <span className="font-semibold">82%</span>
                  </div>
                  <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                    <div className="h-full gradient-blue w-[82%] rounded-full animate-slide-up" style={{ animationDelay: '0.1s' }}></div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">VK Реклама</span>
                    <span className="font-semibold">45%</span>
                  </div>
                  <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                    <div className="h-full gradient-purple w-[45%] rounded-full animate-slide-up" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="gradient-blue text-white border-0 mb-4">
              Услуги
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Полный спектр решений</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Всё необходимое для успешного продвижения вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card 
                key={idx} 
                className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl gradient-purple flex items-center justify-center mb-4 group-hover:animate-float">
                  <Icon name={service.icon as any} className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="gradient-purple text-white border-0 mb-4">
              Отзывы
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Что говорят клиенты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Более 500+ компаний доверяют нам свою рекламу
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card 
                key={idx} 
                className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-blue flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="gradient-blue text-white border-0 mb-4">
              Тарифы
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Прозрачное ценообразование</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите план, который подходит вашему бизнесу
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, idx) => (
              <Card 
                key={idx} 
                className={`p-8 relative ${
                  plan.popular 
                    ? 'bg-card border-2 border-primary scale-105' 
                    : 'bg-card/50 backdrop-blur border-border'
                } transition-all duration-300 hover:scale-105`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-purple text-white border-0">
                    Популярный
                  </Badge>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    {plan.price !== 'По запросу' && (
                      <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                    )}
                    {plan.price === 'По запросу' && (
                      <span className="text-3xl font-bold gradient-text">{plan.price}</span>
                    )}
                    {plan.period && (
                      <span className="text-muted-foreground">₽/{plan.period}</span>
                    )}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'gradient-purple text-white border-0' 
                      : ''
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.price === 'По запросу' ? 'Связаться' : 'Выбрать план'}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg gradient-purple flex items-center justify-center">
                <Icon name="Rocket" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold gradient-text">AdPro</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition">
                <Icon name="Phone" size={20} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 AdPro. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
