import { Component } from '@angular/core';

@Component({
  selector: 'app-back-end',
  templateUrl: './back-end.component.html',
  styleUrls: ['./back-end.component.scss']
})
export class BackEndComponent {
  public BackEnd  = [
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      name: "Java"
    },
    
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      name: "Node.js"
    },

    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg",
      name: "mongodb"
    },
    
    {
      url: "/assets/images/techs/sql.png",
      name: "sql"
    },
    
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      name: "Postgres"
    },

    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
      name: "MySQL"
    },
    
    {
      url: "/assets/images/techs/postman.png",
      name: "Postman"
    },
    
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
      name: "sequelize"
    },
    
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
      name: "webpack"
    },
    
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      name: "Express"
    },
    
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      name: "Python"
    },

  ]
}
