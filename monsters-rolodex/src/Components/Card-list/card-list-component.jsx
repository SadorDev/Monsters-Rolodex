import Card from "../Card/Card.component";
import "./Card-list.styles.css";

const CardList = ({ monsters }) => {
    console.log("monsters", monsters);



  <div className="card-list">
    {/* We optimzed the monster variable as there were mutiple 
        monster.name, monster.email & monster.id   */}
    {monsters && monsters.map((monster) => {
      return <Card monster={monster} key={monster.id} />;
    })}
  </div>;
};

export default CardList;
