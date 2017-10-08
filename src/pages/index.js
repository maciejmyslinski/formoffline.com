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
  padding: 0 8px;
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

const Subtitle = styled.p`
  margin: 24px auto 96px;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`

const AppView = styled.img`
  border-bottom: 14px solid #673ab7;
  padding: 0 0 48px 0;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  margin: 0 auto 96px;
`

const AppMockup = styled.img`
  display: none;
`

const Step = styled.div`
  margin: 120px auto 0;
  padding: 0 8px;
  max-width: 100vw;
  overflow: hidden;
`

const StepHeader = styled.div`
  display: flex;
`

const StepNumber = styled.span`
  font-weight: 500;
  font-size: 112px;
  line-height: 120px;
  text-align: center;
  color: rgba(0, 0, 0, 0.08);
  flex: 0 0 64px;
  margin: 0 16px 0 0;
`

const StepTitleWrapper = styled.div`
  flex: 1 1;
`

const StepTitle = styled.h2`
  font-size: 24px;
  line-height: 24px;
  font-weight: 400;
  margin: 24px 0 0;
`

const StepDescription = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.54);
  margin: 0;
`

const StepImage = styled.img`
  max-width: 100%;
  margin: 0 auto;
  display: block;
`

const Pricing = styled.div`
  margin: 270px auto 0;
  display: flex;
  flex-flow: column nowrap;
`

const Price = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

const PriceCurrency = styled.div`
  font-size: 45px;
  line-height: 96px;
  color: rgba(0, 0, 0, 0.54);
`

const PriceValue = styled.div`
  font-weight: 500;
  font-size: 112px;
  line-height: 120px;
`

const PriceDescription = styled.p`
  font-size: 24px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.54);
  text-align: center;
  margin: 0 auto;
`

const Subscription = styled.div`
  margin: 144px 0 120px;
  padding: 8px;
`

const SubscriptionIncentive = styled.p`
  margin: 0 0 24px;
  text-align: center;
  font-size: 20px;
  line-height: 24px;
`

const SubscriptionForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
`

const SubscriptionInput = styled.input`
  background-color: #fff8ce;
  border: 0;
  height: 48px;
  padding: 14px 12px;
  z-index: 1;
  border-radius: 2px;
`

const SubscriptionButton = styled.button`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  background-color: #ffea00;
  border: 0;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  padding: 12px;
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
      <Subtitle>so your employees waste no time wherever they are</Subtitle>
    </Header>
    <AppView
      srcSet={`
        ${appView},
        ${appView2x} 2x,
        ${appView3x} 3x
      `}
      src={appView}
      alt="Form Offline app"
    />
    <AppMockup
      srcSet={`
        ${appMockup},
        ${appMockup2x} 2x,
        ${appMockup3x} 3x
      `}
      src={appMockup}
      alt="Form Offline app"
    />
    <Step>
      <StepHeader>
        <StepNumber>1</StepNumber>
        <StepTitleWrapper>
          <StepTitle>Create a form</StepTitle>
          <StepDescription>
            using Google Forms™ creator you love
          </StepDescription>
        </StepTitleWrapper>
      </StepHeader>
      <StepImage src={createAForm} alt="Form Offline app" />
    </Step>
    <Step>
      <StepHeader>
        <StepNumber>2</StepNumber>
        <StepTitleWrapper>
          <StepTitle>Make it offline ready</StepTitle>
          <StepDescription>with a click of a button</StepDescription>
        </StepTitleWrapper>
      </StepHeader>
      <StepImage src={makeItOfflineReady} alt="Form Offline app" />
    </Step>
    <Step>
      <StepHeader>
        <StepNumber>3</StepNumber>
        <StepTitleWrapper>
          <StepTitle>Install the app on your phone</StepTitle>
          <StepDescription>or a tablet</StepDescription>
        </StepTitleWrapper>
      </StepHeader>
      <StepImage
        srcSet={`
          ${installTheApp},
          ${installTheApp2x} 2x,
          ${installTheApp3x} 3x
        `}
        src={installTheApp}
        alt="Form Offline app"
      />
    </Step>
    <Step>
      <StepHeader>
        <StepNumber>4</StepNumber>
        <StepTitleWrapper>
          <StepTitle>Fill the form offline</StepTitle>
          <StepDescription>
            it will be submittend when your phone connects to the Internet
          </StepDescription>
        </StepTitleWrapper>
      </StepHeader>
      <StepImage src={fillAFormOffline} alt="Form Offline app" width="90" />
    </Step>
    <Pricing>
      <Price>
        <PriceCurrency>$</PriceCurrency>
        <PriceValue>5</PriceValue>
      </Price>
      <PriceDescription>per user per month</PriceDescription>
    </Pricing>
    <Subscription>
      <SubscriptionIncentive>
        Subscribe to get notified when the app goes live
      </SubscriptionIncentive>
      <SubscriptionForm>
        <SubscriptionInput type="email" placeholder="Email address" />
        <SubscriptionButton type="submit">
          It's worth $5 a month to me, notify me when I can try it
        </SubscriptionButton>
      </SubscriptionForm>
    </Subscription>
  </div>
)

export default IndexPage
