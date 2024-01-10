import React from 'react'
import Logo from "@/components/mainLogo";
import MainMenu from "@/components/MainMenu";

class Contact extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      names: "",
      sender: "",
      mailContent: "",
    }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST",
      url:"https://oi.rw:8080/api/email/submit",
      data:  this.state
    }).then((response)=>{
      navigate('/get-in-touch/success');
      this.resetForm();
    })
  }

  resetForm(){
    this.setState({names: '', sender: '', mailContent: ''})
  }
  render() {
    return (
    <section className="bg-white text-black min-h-screen">
      <MainMenu className="text-black" />
          <div className="mx-auto px-4 sm:px-6 lg:px-32">
            <div className="flex lg:flex-row flex-col justify-between">
            <div>
              <div className="col-lg-6 pt-8 pb-4 pt-lg-8">
                <div className="row align-items-center justify-content-center">
                  <div className="col-10 flex flex-col">
                    <h1 className="text-4xl font-extrabold h1 font-weight-bolder mb-2 mb-lg-0 d-lg-block d-none">Muraho!</h1>

                    <p className="py-1 d-none d-lg-block">Do you have an inquiry, or want to get in touch with us about working together? We are listening</p>
                    <div className="block lg:hidden">
                      <div className="flex flex-col gap-4 my-8">
                        <div className="flex">
                          <span><i><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-white"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></i></span>&nbsp;
                          <span className="font-size-xs">ikaze@yato.rw</span>
                        </div>
                        <div className="flex">
                          <span><i><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-white"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></i></span>&nbsp;
                          <span className="font-size-xxs">+250 788 31 75 28 / +250 788 31 92 28</span>
                        </div>
                        <div className="flex">
                          <span><i><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-white"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></i></span>&nbsp;
                          <span className="font-size-xs">Irembo House, 72 KN 5 Rd, Remera-Kisimenti</span>
                        </div>
                      </div>
                    </div>
                    <form onSubmit={this.handleSubmit.bind(this)} className="mt-4" method="POST">
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-3"
                        type="text"
                        name="names"
                        value={this.state.names}
                        onChange={this.onNameChange.bind(this)}
                        placeholder="Full Name"
                      />
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-3"
                        type="text"
                        name="sender"
                        value={this.state.sender}
                        onChange={this.onSenderChange.bind(this)}
                        placeholder="Email"
                      />
                      <textarea
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-3 resize-none"
                        rows={5}
                        name="mailContent"
                        value={this.state.mailContent}
                        onChange={this.onMailcontentChange.bind(this)}
                        placeholder="Message"
                        required
                      />
                      <button
                        className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4"
                        type="submit"
                      >
                        Get in touch
                      </button>
                    </form>

                  </div>
                </div>
              </div>
            </div>
            <div>
            <div className="col-lg-5 offset-1 order-lg-last order-first pt-8 pb-lg-4 pt-lg-8  h-full hidden lg:block">
              <div className="flex flex-col justify-between min-h-full ">
                <div className="flex flex-col gap-4">
                  <div className="flex">
                    <span><i><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-white"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></i></span>&nbsp;
                    <span className="font-size-xs">ikaze@yato.rw</span>
                  </div>
                  <div className="flex">
                    <span><i><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-white"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></i></span>&nbsp;
                    <span className="font-size-xxs">+250 788 31 75 28 / +250 788 31 92 28</span>
                  </div>
                  <div className="flex">
                    <span><i><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-white"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></i></span>&nbsp;
                    <span className="font-size-xs">Irembo House, 72 KN 5 Rd, Remera-Kisimenti</span>
                  </div>
                </div>
                <div className="col-12 pt-lg-15 d-none d-lg-block">
                  <div className="row">
                    <div className="flex items-center gap-10">
                      <Logo className="text-black mr-4 w-3.5" />
                      <img src="https://oi.rw/static/qrcode-bd3a7333dd80fa5f109269ad32bb0017.svg" className="w-24" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
          </div>
        </section>
    );
  }

  onNameChange(event) {
    this.setState({names: event.target.value})
  }

  onSenderChange(event) {
    this.setState({sender: event.target.value})
  }

  onMailcontentChange(event) {
    this.setState({mailContent: event.target.value})
  }
}

export default Contact
