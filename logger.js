// logger.js
const { createLogger, format, transports } = require('winston')
const { combine, timestamp, printf } = format
const path = require('path')

// Function to generate a datetimestamp string
const getDateTimeString = () => {
	const now = new Date()
	const year = now.getFullYear()
	const month = String(now.getMonth() + 1).padStart(2, '0')
	const day = String(now.getDate()).padStart(2, '0')
	const hours = String(now.getHours()).padStart(2, '0')
	const minutes = String(now.getMinutes()).padStart(2, '0')
	return `${year}${month}${day}_${hours}${minutes}`
}

// Generate filenames with datetimestamp
const dateTimeString = getDateTimeString()
const extra = "_car15BKGR"
const errorLogFilename = path.join(__dirname, `error_${dateTimeString}${extra}.log`)
const combinedLogFilename = path.join(__dirname, `combined_${dateTimeString}${extra}.log`)

// Custom log format
const logFormat = printf(({ level, message, timestamp }) => {
	return `${timestamp} [${level}]: ${message}`
})

// Create the logger instance
const logger = createLogger({
	level: 'info', // Default logging level
	format: combine(timestamp(), logFormat),
	transports: [
		new transports.File({ filename: errorLogFilename, level: 'error' }),
		new transports.File({ filename: combinedLogFilename }),
	],
})

// If we're not in production, log to the console as well
if (process.env.NODE_ENV !== 'production') {
	logger.add(
		new transports.Console({
			format: combine(timestamp(), logFormat),
		})
	)
}

module.exports = logger
