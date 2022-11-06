import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarComponent from './components/Navbar.js'
import { BarChart } from "./components/BarChart.js"

import { backColor } from './components/colors';
import { useSelector } from 'react-redux';

function App() {
	const data = useSelector(data => data[0])

	const createDataSet = (set) => {
		return Object.keys(data[set]).slice(0,10).map((term, i) => {
			return {
				label: term,
				data: [data[set][term]],
				backgroundColor: backColor[i]
			}
		})
	}

	const TopTerms = {
		labels: ["Today's Top 10 Terms On Glassdoor"],
		datasets: createDataSet("termCounts"), 
	};

	const TopLanguagues= {
		labels: ["Top Languages on Glassdoor"],
		datasets: createDataSet("languages") 
	};

	const TopSql = {
		labels: ["Top SQL/noSQL Languages on Glassdoor"],
		datasets: createDataSet("sqlNoSql") 
	};

	const TopBackend = {
		labels: ["Top Backend Terms on Glassdoor"],
		datasets: createDataSet("backend") 
	};

	const TopFrontend = {
		labels: ["Top Frontend Terms on Glassdoor"],
		datasets: createDataSet("frontend") 
	};

	const TopFrameworks = {
		labels: ["Top Frameworks Terms on Glassdoor"],
		datasets: createDataSet("frameworks") 
	};

	const TopSecurity = {
		labels: ["Top Security Terms on Glassdoor"],
		datasets: createDataSet("security") 
	};

	const TopTesting = {
		labels: ["Top Testing Terms on Glassdoor"],
		datasets: createDataSet("testing") 
	};

	const TopCloud = {
		labels: ["Top Cloud Terms on Glassdoor"],
		datasets: createDataSet("cloudTerms") 
	};

	const TopDevProcess = {
		labels: ["Top Backend Terms on Glassdoor"],
		datasets: createDataSet("softwareDevProcesses") 
	};

	const TopVersionControl = {
		labels: ["Top Version Control Terms on Glassdoor"],
		datasets: createDataSet("versionControl") 
	};

	const TopOS = {
		labels: ["Top Operating System Terms on Glassdoor"],
		datasets: createDataSet("operatingSys") 
	};

	const TopOther = {
		labels: ["Top Other Terms on Glassdoor"],
		datasets: createDataSet("other") 
	};
	return (
		<Container>
			<NavbarComponent />
			<Row>
				<Col>
					<div style={{width: "500px", margin: "5px", display: "inline-block"}}>
						<BarChart data={TopTerms} />
					</div>
				</Col>
				<Col>
					<div style={{width: "500px", margin: "5px", display: "inline-block"}}>
						<BarChart data={TopLanguagues} />
					</div>
				</Col>
			</Row>
			<Row>
				<Col>
					<div style={{width: "500px", margin: "5px", display: "inline-block"}}>
						<BarChart data={TopSql} />
					</div>
				</Col>
				<Col>
					<div style={{width: "500px", margin: "5px", display: "inline-block"}}>
						<BarChart data={TopBackend} />
					</div>
				</Col>
			</Row>
			<Row>
				<Col>
					<div style={{width: "500px", margin: "5px", display: "inline-block"}}>
						<BarChart data={TopFrontend} />
					</div>
				</Col>
				<Col>
					<div style={{width: "500px", margin: "5px", display: "inline-block"}}>
						<BarChart data={TopFrameworks} />
					</div>
				</Col>
			</Row>
			<Row>
				<Col>
					<div style={{width: "500px", margin: "5px", display: "inline-block"}}>
						<BarChart data={TopSecurity} />
					</div>
				</Col>
				<Col>
					<div style={{width: "500px", margin: "5px", display: "inline-block"}}>
						<BarChart data={TopTesting} />
					</div>
				</Col>
			</Row>
			<Row>
				<Col>
					<div style={{width: "500px", margin: "5px", display: "inline-block"}}>
						<BarChart data={TopCloud} />
					</div>
				</Col>
				<Col>
					<div style={{width: "500px", margin: "5px", display: "inline-block"}}>
						<BarChart data={TopDevProcess} />
					</div>
				</Col>
			</Row>
			<Row>
				<Col>
					<div style={{width: "500px", margin: "5px", display: "inline-block"}}>
						<BarChart data={TopVersionControl} />
					</div>
				</Col>
				<Col>
					<div style={{width: "500px", margin: "5px", display: "inline-block"}}>
						<BarChart data={TopOS} />
					</div>
				</Col>
			</Row>
			<Row>
				<Col>
					<div style={{width: "500px", margin: "5px", display: "inline-block"}}>
						<BarChart data={TopOther} />
					</div>
				</Col>
				<Col>
				</Col>
			</Row>
		</Container>
	)
}

export default App;
