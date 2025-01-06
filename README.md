# Charts for ReactJS

A simple and reusable React Charts built with `react-chartjs-2` and `Chart.js`. Customize your charts with dynamic data and colors!

## Features

- Lightweight and easy to use.
- Customizable with dynamic `data` and `colors`.
- Built with `Chart.js` for smooth animations and performance.

## Installation

Install the package using npm or yarn:

```bash

npm install charts-for-react

```

## Example

```js

import PieChart from 'charts-for-react';
import React from 'react'

const HomePage = () => {
    const chartData = {
        React: {value: 20, color: '#61DAFB'},
        Vite: {value: 20, color: '#646CFF'},
        Tailwindcss: {value: 60, color: '#38BDF8'},
    };
  return (
    <div>
        <div className="md:grid grid-cols-3">
            <PieChart data={chartData}/>
        </div>
    </div>
  )
}

export default HomePage

```

## Props

| Chart | Prop | Type | Description | Required | 
|------|------|------|------|------|
| Pie Chart | `data` | `object` | An object containing chart data and colors. The keys represent labels, and each key has a `value` and `color` | Yes |



## Example ScreenShorts

<center>
    <img src='https://github.com/BackendExpert/charts-for-react/blob/master/assest/piechart.PNG'>
</center>

### License

This package is licensed under the MIT License.