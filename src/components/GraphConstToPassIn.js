import { backColor } from './colors';
import axios from 'axios';


const createDataSet = (set) => {
	return Object.keys(useSelector(data => data)[set]).slice(0,10).map((term, i) => {
		return {
			label: term,
			data: [useSelector(data => data)[set][term]],
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
	labels: ["Top Backend Terms on Glassdoor"],
	datasets: createDataSet("frontend") 
};

const TopFrameworks = {
	labels: ["Top Backend Terms on Glassdoor"],
	datasets: createDataSet("frameworks") 
};

const TopSecurity = {
	labels: ["Top Backend Terms on Glassdoor"],
	datasets: createDataSet("security") 
};

const TopTesting = {
	labels: ["Top Backend Terms on Glassdoor"],
	datasets: createDataSet("testing") 
};

const TopCloud = {
	labels: ["Top Backend Terms on Glassdoor"],
	datasets: createDataSet("cloudTerms") 
};

const TopDevProcess = {
	labels: ["Top Backend Terms on Glassdoor"],
	datasets: createDataSet("softwareDevProcesses") 
};

const TopVersionControl = {
	labels: ["Top Backend Terms on Glassdoor"],
	datasets: createDataSet("versionControl") 
};

const TopOS = {
	labels: ["Top Backend Terms on Glassdoor"],
	datasets: createDataSet("operatingSys") 
};

const TopOther = {
	labels: ["Top Backend Terms on Glassdoor"],
	datasets: createDataSet("other") 
};
