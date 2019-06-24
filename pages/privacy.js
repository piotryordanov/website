/* eslint react/jsx-child-element-spacing: 0 */
import React from 'react'
import {Box} from 'rebass'
import styled from 'styled-components'
import withLayout from '../components/withLayout'

const EntryContent = styled(Box)`
	max-width: 700px;
	margin: auto;

	font-family: 'PT Serif', serif !important;
	-webkit-font-smoothing: antialiased;
	margin: 0px;
	height: calc(100% - 20px);
	max-width: 700px;
	margin-left: auto;
	margin-right: auto;
	line-height: 1.35;
	font-size: 22px;
	padding-top: 60px;
	padding-left: 24px;
	padding-right: 24px;
	text-align: left;
`

const Title = styled.div`
	text-align: center;
	font-size: 4.0625rem;
	max-width: 600px;
	margin: 30px auto;
	font-weight: bold;
	font-family: 'Montserrat', sans-serif;
	text-transform: uppercase;
`
const Index = () => (
	<EntryContent>
		<Title>Privacy Policy</Title>
		<p>
			Your privacy is very important to us. Accordingly, we have developed this
			Policy in order for you to understand how we collect, use, communicate and
			disclose and make use of personal information. The following outlines our
			privacy policy.
		</p>
		<ul>
			<li>
				Before or at the time of collecting personal information, we will
				identify the purposes for which information is being collected.
			</li>
			<li>
				We will collect and use of personal information solely with the
				objective of fulfilling those purposes specified by us and for other
				compatible purposes, unless we obtain the consent of the individual
				concerned or as required by law.
			</li>
			<li>
				We will only retain personal information as long as necessary for the
				fulfillment of those purposes.
			</li>
			<li>
				We will collect personal information by lawful and fair means and, where
				appropriate, with the knowledge or consent of the individual concerned.
			</li>
			<li>
				Personal data should be relevant to the purposes for which it is to be
				used, and, to the extent necessary for those purposes, should be
				accurate, complete, and up-to-date.
			</li>
			<li>
				We will protect personal information by reasonable security safeguards
				against loss or theft, as well as unauthorized access, disclosure,
				copying, use or modification.
			</li>
			<li>
				We use data from Google’s interest-based advertising or 3rd-party
				audience data (such as age, gender and interests) with Google Analytics.
			</li>
			<li>
				Visitors can opt out of Google Analytics for Display Advertising and
				customize Google Display Network ads using the&nbsp;
				<a href="https://www.google.com/settings/ads">Ads Settings</a>. Visitors
				can also use the Google Analytics&nbsp;
				<a href="https://tools.google.com/dlpage/gaoptout/">
					opt-out browser add-on
				</a>
				&nbsp;to prevent their data to be used by Google Analytics.
			</li>
			<li>
				We will make readily available to customers information about our
				policies and practices relating to the management of personal
				information.
			</li>
		</ul>
		<p>
			We are committed to conducting our business in accordance with these
			principles in order to ensure that the confidentiality of personal
			information is protected and maintained.
		</p>
	</EntryContent>
)

export default withLayout(Index)
