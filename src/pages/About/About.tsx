import { Component } from 'react';
import styles from './About.module.scss';

export default class About extends Component {
  render() {
    return (
      <div className="container page" data-testid="page-about">
        <h2 className={styles.about__title}>About</h2>

        <p className={styles.about__description} data-testid="about-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat provident ullam inventore
          distinctio velit ducimus, quis dolorem voluptatum, optio ut eius sequi architecto
          repellendus. Ullam temporibus ipsum accusantium, quod in laudantium repellendus odio
          consequatur illum ab quas officiis. Mollitia, inventore fugit vel nesciunt amet soluta
          debitis! Autem, sunt ipsam, in, ratione perspiciatis consequatur necessitatibus assumenda
          saepe minus dolores magnam dolorum. Alias rerum totam voluptatem architecto fugit odio
          excepturi. Quas sapiente eos beatae aspernatur quasi tenetur doloribus corporis debitis,
          porro dolorem animi! At maxime deserunt amet pariatur nisi iste illum adipisci ullam est,
          qui quos et quia tenetur, cum nesciunt aliquam!
        </p>
      </div>
    );
  }
}
