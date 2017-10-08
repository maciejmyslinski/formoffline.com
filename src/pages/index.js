import React from 'react'
import styled from 'styled-components'
import logo from '../img/logo-transparent.png'
import logo2x from '../img/logo-transparent@2x.png'
import logo3x from '../img/logo-transparent@3x.png'
import appView from '../img/app-view.png'
import appView2x from '../img/app-view@2x.png'
import appView3x from '../img/app-view@3x.png'
import appMockup from '../img/app-mockup.png'
import appMockup2x from '../img/app-mockup@2x.png'
import appMockup3x from '../img/app-mockup@3x.png'
import createAForm from '../img/create-a-form.gif'
import makeItOfflineReady from '../img/make-it-offline-ready.gif'
import installTheApp from '../img/install-the-app.png'
import installTheApp2x from '../img/install-the-app@2x.png'
import installTheApp3x from '../img/install-the-app@3x.png'
import fillAFormOffline from '../img/fill-a-form-offline.png'
import fillAFormOffline2x from '../img/fill-a-form-offline@2x.png'
import fillAFormOffline3x from '../img/fill-a-form-offline@3x.png'

const Header = styled.div`
  color: #fff;
  background-image: linear-gradient(142deg, #b388ff 0%, #7c4dff 100%);
  display: flex;
  flex-flow: column nowrap;
`

const Logo = styled.img`
  margin: 24px auto 0;
  height: 72px;
`

const Title = styled.h1`
  text-align: center;
  font-size: 34px;
  font-weight: 400;
  line-height: 48px;
  margin: 72px auto 0;
`

const IndexPage = () => (
  <div>
    <Header>
      <Logo
        srcSet={`
          ${logo},
          ${logo2x} 2x,
          ${logo3x} 3x
        `}
        src={logo}
        alt="Form Offline logo image"
      />
      <Title>Offline data collection app for Google Forms™</Title>
      <p>so your employees waste no time wherever they are</p>
      <img
        srcSet={`
          ${appView},
          ${appView2x} 2x,
          ${appView3x} 3x
        `}
        src={appView}
        alt="Form Offline app"
      />
      <img
        srcSet={`
          ${appMockup},
          ${appMockup2x} 2x,
          ${appMockup3x} 3x
        `}
        src={appMockup}
        alt="Form Offline app"
      />
    </Header>
    <div>
      <span>1</span>
      <h2>Create a form</h2>
      <p>using Google Forms™ creator you love</p>
      <img src={createAForm} alt="Form Offline app" />
    </div>
    <div>
      <span>2</span>
      <h2>Make it offline ready</h2>
      <p>with a click of a button</p>
      <img src={makeItOfflineReady} alt="Form Offline app" />
    </div>
    <div>
      <span>3</span>
      <h2>Install the app on your phone</h2>
      <p>or a tablet</p>
      <img
        srcSet={`
          ${installTheApp},
          ${installTheApp2x} 2x,
          ${installTheApp3x} 3x
        `}
        src={installTheApp}
        alt="Form Offline app"
      />
    </div>
    <div>
      <span>4</span>
      <h2>Fill the form offline</h2>
      <p>it will be submittend when your phone connects to the Internet</p>
      <img src={fillAFormOffline} alt="Form Offline app" />
    </div>
    <div>
      <p>
        <span>$</span>
        <span>5</span>
      </p>
      <p>per user per month</p>
    </div>
    <div>
      <p>Subscribe to get notified when the app goes live</p>
      <form>
        <input type="email" placeholder="Email address" />
        <button type="submit">
          It's worth $5 a month to me, notify me when I can try it
        </button>
      </form>
    </div>
  </div>
)

export default IndexPage
