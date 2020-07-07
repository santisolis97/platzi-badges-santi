import React from "react";
import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import { Link } from "react-router-dom";
import api from "../api"

class Badges extends React.Component {
  state = {
    loading: true, 
    data: undefined,
    error: null,
  };



    componentDidMount(){
      this.fetchData();

    }

    fetchData = async () => {
      this.setState({loading:true, error:null})

      try{
        const data = await api.badges.list();
        this.setState({loading: false, data: data,})
      }catch(error){
        this.setState({loading: false, error: error,})

      }
    }


  render() {
    
   if (this.state.loading=== true){
     return "Loading..."
   }
   if (this.state.error){
     return `Error: ${this.state.error.message}`
   }

   

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges_hero">
            <div className="Badges_container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badge_container container">
          <div className="Badges_buttons">
            <Link className="btn btn-primary" to="/badges/new">
              New Badge
            </Link>
          </div>

          <div className="Badges_list">
            <div className="Badges_container">
              <BadgesList badges={this.state.data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Badges;
