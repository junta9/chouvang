'use strict';

const e = React.createElement;

class AboutButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false, showText: false };
  }

  handleClick() {
    this.setState((prevState) => ({
      liked: !prevState.liked,
      showText: !prevState.showText,
    }));
  }

  render() {
    return e(
      'div',
      { id: 'about-all' },
      e(
        'button',
        { onClick: () => this.handleClick() },
        'A propos'
      ),
      this.state.showText && e(
        'section',
        { id: 'about-me' },
        e('div', null,
          e('h2', null, 'A propos de moi'),
          e('p', null, "En ",
            e('strong', null, '2021'),
            " j'ai pris la décision de me reconvertir dans le domaine de l'informatique, qui est ma première passion.",
            e('br', null), e('br', null),
            "J'ai donc entamé une formation professionnelle axée sur les ",
            e('strong', null, 'systèmes et les réseaux'),
            ", et j'ai obtenu un ",
            e('strong', null, 'titre professionnel'),
            " dans ce domaine.",
            e('br', null), e('br', null),
            "Pendant cette formation, j'ai découvert le monde du script et du développement web, ce qui m'a conduit à entreprendre une autre formation en ",
            e('strong', null, 'Développement Web et Applications Multimédia'),
            ".",
            e('br', null), e('br', null),
            "Grâce à ces formations, j'ai acquis des compétences solides en programmation et en conception de sites web.",
            e('br', null), e('br', null),
            "J'ai également eu l'opportunité de travailler sur des ",
            e('strong', null, 'projets concrets'),
            ", ce qui m'a permis de mettre en pratique mes connaissances et de perfectionner mes compétences.",
            e('br', null), e('br', null),
            "Au fil de ma formation, j'ai réalisé que le développement web représentait bien plus qu'une simple passion pour moi.",
            e('br', null), e('br', null),
            "C'est devenu une véritable vocation. J'apprécie la créativité et les défis que ce domaine offre, ainsi que la possibilité de créer des solutions interactives et innovantes.",
            e('br', null), e('br', null),
            "J'ai également découvert le framework ",
            e('strong', null, 'Symfony'),
            ", qui m'a permis de développer des applications web puissantes et flexibles.",
            e('br', null), e('br', null),
            "La programmation en PHP et l'utilisation de Symfony me procurent une grande satisfaction, car cela me permet de concevoir des projets solides et efficaces.",
            e('br', null), e('br', null),
            "Aujourd'hui, je suis prêt à mettre mes compétences et ma passion au service d'une ",
            e('strong', null, 'entreprise'),
            " ou d'un ",
            e('strong', null, 'projet'),
            " qui me permettra de continuer à évoluer dans le domaine du développement web.",
            e('br', null), e('br', null),
            "Je suis ",
            e('strong', null, 'motivé'),
            " à apprendre de nouvelles technologies et à relever de nouveaux défis, car je suis convaincu que l'informatique est un domaine en constante évolution qui offre des opportunités infinies."
          )
        ),
        e('section', { id: 'formation', className: 'formation' },
          e('div', null,
            e('h2', null, 'Ma formation'),
            e('div', null,
              e('h3', null, 'Développeur Web et d\'Application Multimédia'),
              e('p', null, '2022 - 2023'),
              e('p', null, 'Philiance - Evry')
            ),
            e('div', null,
              e('h3', null, 'Technicien supérieur en systèmes et réseaux'),
              e('p', null, '2019 - 2021'),
              e('p', null, 'Nextformation - Paris')
            )
          ),
          e('div', { className: 'stage' },
            e('h2', null, 'Expériences professionnelles'),
            e('div', { className: 'stage-content' },
              e('h3', null, 'Stagiaire Développeur PHP Prestashop'),
              e('p', null, 'eboutiquefacile'),
              e('p', null, 'mars 2023 - mai 2023'),
              e('ul', null,
                e('li', null, 'Développement de modules et de fonctionnalités selon cahier des charges'),
                e('li', null, 'Recherche et résolution de bugs Front et Back')
              )
            ),
            e('div', { className: 'stage-content' },
              e('h3', null, 'Stagiaire Technicien support informatique'),
              e('p', null, 'Sleever - Morangis'),
              e('p', null, 'septembre 2021 - novembre 2021'),
              e('ul', null,
                e('li', null, 'Assister les utilisateurs sur site'),
                e('li', null, 'Maintenir, exploiter et sécuriser une infrastructure centralisée'),
                e('li', null, 'Automatisation de tâches via script Powershell et bash')
              )
            ),
            e('div', { className: 'stage-content' },
              e('h3', null, 'Cariste - Préparateur palettes'),
              e('p', null, 'ECF Group - Grigny'),
              e('p', null, 'septembre 2010 - décembre 2021'),
              e('ul', null,
                e('li', null, 'Préparation des commandes provenant d’un convoyeur automatisé vers les zones de rangements avec un engin de catégories CACES 5')
              )
            ),
            e('div', { className: 'stage-content' },
              e('h3', null, 'Téléconseiller multimédia'),
              e('p', null, 'CENTRAPEL - Paris'),
              e('p', null, 'décembre 2006 - juin 2007'),
              e('ul', null,
                e('li', null, 'Résolution des problèmes techniques de clients Free')
              )
            )
          )
        )
      )
    );
  }
}

const domContainer = document.querySelector('#about_button_container');
ReactDOM.render(e(AboutButton), domContainer);
