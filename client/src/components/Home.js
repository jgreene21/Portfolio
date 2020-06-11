import React from "react";
import { Header, Image, Grid, Segment, Modal, Popup} from "semantic-ui-react";
import Instagram from "./instagram.png";
import Linkedin from "./linkedin.png";
import Github from "./github.jpg";
import Contact from "./contact.png";
import ContactForm from "./ContactForm.js";


class Home extends React.Component {
  state = { showForm: false}

  toggleForm = () => {
    this.setState({
       showForm: !this.state.showForm
    });
  };

  render(){
    return (
      <>
  <Grid style={{marginTop: "10px", marginLeft: "200px"}}>
    <Grid.Column width={4} style={{marginRight: "350px", marginLeft: "-170px"}}>
       <Image src= {Contact} style={{height: "100px", width: "100px", marginLeft: "130px"}} onClick={this.toggleForm}/>
       <Modal open={this.state.showForm} close={this.toggleForm}>
          <ContactForm toggleForm={this.toggleForm} />
          </Modal>
    </Grid.Column>
    <Grid.Column style={{marginLeft: "330px"}}>
      <p style={style.links}>Find 
      <br/>Me
      <br/>On</p>
    </Grid.Column>
    <Grid.Column width={3} style={{marginLeft: "50px", marginTop: "10px"}}>
        <Popup
          trigger= {<a href= "https://github.com/jgreene21"><Image src={Github} style={{height: "55px", width: "80px", marginBottom: "20px"}}/></a>}
          content= {<p style={style.popupText}>Github</p>} 
          position="right center"
          basic
          inverted
          style={style.popup}
          />
         <Popup
          trigger= {<a href= "https://www.linkedin.com/in/julie-greene-slc/"><Image src={Linkedin} style={{height: "50px", width: "50px", marginBottom: "20px", marginLeft: "15px"}}/></a>}
          content= {<p style={style.popupText}>Linkedin</p>} 
          position="right center"
          basic
          inverted
          style={style.popup}
          />
         <Popup
          trigger= {<a href= "https://www.instagram.com/julescgreene/"><Image src={Instagram} style={{height: "55px", width: "55px", marginLeft: "15px"}}/></a>}
          content= {<p style={style.popupText}>Instagram</p>} 
          position="right center"
          basic
          inverted
          style={style.popup}
          />
    </Grid.Column>
  </Grid>
  <div style={{marginTop: "100px"}} class= "animate__animated animate__fadeInLeft">
  <Header style={style.greeting}>HELLO</Header>
  <Header style={style.greeting}>I'm <span style={style.name}>Julie Greene.</span></Header>
  <br/>
  <p style={style.description}>I'm a full stack web developer</p>
  </div>
  <div style={{marginTop: "220px"}} class="animate__animated animate__fadeInUp">
    <Grid centered>
      <Grid.Column>
        <p style={style.about}>Who 
        <br/>Am I?</p>
      </Grid.Column>
      <Grid.Column width={6} style={{marginLeft: "50px"}}>
        <p style={style.me}>After twelve years raising my kids I decided to dive into a new and exciting path. I've
        gone from knowing less about computers than my young sons to building websites. 
        Proving to myself and my children that it's never to late to follow new dreams. </p>
        <br/> 
        <p style={style.me}>I've always loved creating and have fallen for frontend and design. 
        I love how with even just one line of code the look and functionality of a site
        can be improved. I look forward to growing my skill to merge beauty and user
        experience with technical knowledge to create cool digital experiences.</p>
      </Grid.Column>
    </Grid>
  </div>
  <div style={{marginTop: "100px", textAlign: "center"}}>
  <p style={style.title}>My First Projects</p>
  <Segment fluid style={{padding: "20px", marginRight: "-20px", borderRadius: "0"}} inverted>
    <Popup
      trigger={<a style={style.first} href="https://devpoint-labs-store-2020.herokuapp.com/"><i class="fas fa-store" style={{width: "50px"}}/></a>} 
      header={<p style={style.projectPopupTextHeader}>DevPoint Store</p>} 
    content= {<p style={style.projectPopupText}>DevPoint Store is a retail store created for DevPoint Labs. It was built with a Ruby on Rails backend and React frontend. I created the navbar and footers and did the majority of the layout and design throughout.</p>} 
      inverted 
      wide
      position="top center"
      basic 
      style={style.projectPopup}
      />
    <Popup 
      trigger={<a style={style.project}><i class="fas fa-tools"/></a>}
      header={<p style={style.projectPopupTextHeader}>Renovate</p>} 
      content={<p style={style.projectPopupText}>Renovate provides organization to your home renovation. With a place for your inspiration, before and afters, receipts, invoices, and contacts.</p>}
      inverted
      wide 
      position="top center"
      basic 
      style={style.projectPopup}
      />
    <Popup 
      trigger={<a style={style.project}><i class="fas fa-user-md"/></a>}
      header={<p style={style.projectPopupTextHeader}>Covid-19 Symptom Tracker</p>} 
      content={<p style={style.projectPopupText}>Renovate provides organization to your home renovation. With a place for your inspiration, before and afters, receipts, invoices, and contacts.</p>}
      inverted
      wide
      position="top center" 
      basic
      style={style.projectPopup} 
      />
    <Popup 
      trigger={<a style={style.project}><i class="far fa-hand-rock" style={{marginRight: "5px"}}></i><i class="far fa-hand-paper" style={{marginRight: "5px"}}></i><i class="far fa-hand-scissors"/></a>}
      header={<p style={style.projectPopupTextHeader}>Rock Paper Scissors</p>} 
      content={<p style={style.projectPopupText}>Renovate provides organization to your home renovation. With a place for your inspiration, before and afters, receipts, invoices, and contacts.</p>} 
      inverted
      wide
      position="top center" 
      basic 
      style={style.projectPopup}
      />
  </Segment>
  </div>
 
  </>
    )
  }
};

const style = {
  popup: {
    marginLeft: "-100px"
  },
  popupText: {
    fontFamily: "Raleway", 
    fontSize: 20,
  },
  greeting: {
    fontFamily: "Raleway", 
    fontSize: 60,
    marginLeft: "230px"
  },
  name: {
    fontFamily: "Raleway", 
    fontSize: 60,
    color: "pink"
  },
  links: {
    fontFamily: "Raleway", 
    fontSize: 40,
  },
  description: {
    fontFamily: "Raleway", 
    fontSize: 40,
    marginLeft: "230px"
  },
  about: {
    fontFamily: "Raleway", 
    fontSize: 40,
    fontWeight: "bold",
  },
  me: {
    fontFamily: "Raleway", 
    fontSize: 15,
    fontWeight: 600,
    marginTop: "15px"
  },
  title: {
    fontFamily: "Raleway", 
    fontSize: 25,
    fontWeight: 500
  },
  project: {
    fontFamily: "Raleway", 
    color: "pink",
    marginLeft: "50px"
  },
  first: {
    fontFamily: "Raleway", 
    color: "pink",
  },
  projectPopupText: {
    fontFamily: "Raleway", 
    fontSize: 15,
  },
  projectPopupTextHeader: {
    fontFamily: "Raleway", 
    fontSize: 15,
    fontWeight: "bold"
  },
  projectPopup: {
    padding: "20px",
    marginBottom: "30px",
  }
}

export default Home;