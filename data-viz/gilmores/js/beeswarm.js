//-----------------------------------------------------------------------
// D3 Script for gilmore girls lit canon analysis
// Lede Project 1 - June 2023
//-----------------------------------------------------------------------
// setting up SVG selection + dimensions
const width =  720
const height = 600
const padding = ({top: 0, right: 40, bottom: 34, left: 40});

const svg = d3.select('svg.chart')
svg.attr("viewBox", `0 0 ${width} ${height}`)

// appending axis to svg
const xAxisGroup = svg
  .append('g')
  .attr('class', 'xAxis')
  .attr('transform', `translate(0, ${padding.bottom})`)

// loading + processing data
let test_25 = 'https://raw.githubusercontent.com/sherbert-lemon/lede-homework/main/d3_data_test.csv'
let test_175 = 'https://raw.githubusercontent.com/sherbert-lemon/public-data/master/d3_data_test175.csv'
let test_ALL = 'https://raw.githubusercontent.com/sherbert-lemon/public-data/master/d3_data_test_ALL.csv'

// title,author,year,OLID_work_key,OLID_logged_ed,cover_id,cover_sm,cover_med,subjects
const data = []

d3.csv(test_ALL, function (d) {
  const book = {}

  book.title = d.title,
  book.author = d.author,
  book.year = +d.year,
  book.coverSM = d.cover_sm,
  book.coverMD = d.cover_med

  data.push(book)
})
  .then(function() { // ASYNCHRONOUS HANDLING!!! d3.csv is asynchronous
    // ALL DATA ANALYSIS IN HERE
    var sortedData = data.slice().sort(function (a, b) {
      return d3.ascending(a.year, b.year)
    })

    // setting up selectors
    // 1. infobox tags
    var titleTag = document.querySelector(".works .info-box .title span#title")
    var authorTag = document.querySelector(".works .info-box .author span#author")
    var yearTag = document.querySelector(".works .info-box .year span#year")
    var coverTag = document.querySelector(".works .cover-display .cover img#cover")

    // 2. dropdown tags
    // var selectTag = document.querySelector(".select select.scale option")
    // var scaleSelect = selectTag.value

    // chart boundaries + xAxis set up with domains
    const max = d3.max( sortedData, d => { return d.year } )
    const upperBound = max + 10

    const min = d3.min( sortedData, d => { return d.year } )
    const lowerBound = min - 10


  //--------------------LISTENER FUNCTIONS----------------------//
  // on click of group --> grab book object info and
  //  and channel over for div update (cover info box)
  function sendInfo(d) {
    title = d.title
    author = d.author
    pubYear = d.year
    imgURL = d.coverMD

    titleTag.innerText = title
    authorTag.innerText = author
    yearTag.innerText = pubYear

    coverTag.src = imgURL
  }

  // main function that draws + handles update
  // update takes in change in scale: inputs scale var
  function charter(scaleSelected) {
    console.log('scale selected in charter: ', scaleSelected, '\n')

    // var ticks = 0
    // dynamic  scale set-up based on input
    if (scaleSelected === "linScale") {
      // ticks = 3

      xScale = d3.scaleLinear()
        .domain([lowerBound, upperBound])
        .range([padding.left, width - padding.right])
        // .nice()
    }
    else if (scaleSelected === "expScale") {
      // ticks = 4

      xScale = d3.scalePow()
        .exponent(20)
        .domain([lowerBound, upperBound])
        .range([padding.left, width - padding.right])
        // .nice()
    }

    // calling axis based on scale
    const xAxis = d3.axisBottom(xScale)
      // .ticks(4) // WHY IS THIS NOT WORKING FOR .TICKS(4)
      .tickValues([1500, 1800, 1900, 1960, 2000, 2020])
      .tickSize(8)
      .tickFormat(d3.format("d"))

    xAxisGroup
      .transition(d3.ease)
      .duration(1000)
      .call(xAxis)

    //------------BEESWARM FORCE FUNCTION-------------//
    let simulation = d3.forceSimulation(sortedData)
        .force("x", d3.forceX(function(d) {
      // behaviour for translating along the x-axis goes here (switching linear => log)
          return xScale(d.year);
      }).strength(2))

        .force("y", d3.forceY((height / 2) - padding.bottom / 2))

        .force("collide", d3.forceCollide(10))
        .stop();

      // Manually run simulation
      for (let i = 0; i < sortedData.length; ++i) {
          simulation.tick();
      }

      //-------------- GENERAL UPDATE------------------//
      // binding data to parent group books
      const canon = svg.selectAll('g.title')
        .data(sortedData, d => { return d.title }) // unique identifier using title

      // entering data
      const enterCanon = canon
        .enter()
        .append('g')
        .attr('class', 'title')
        .attr('transform', (d,i) => { return `translate( ${d.x}, ${d.y})` })

      // merging for UPDATE
      const canonMerged  = enterCanon.merge(canon)

      canonMerged
        // .attr('class', 'title')
        .transition(d3.ease)
        .duration(1200)
        .attr('transform', (d,i) => { return `translate( ${d.x}, ${d.y})` })

      enterCanon
        .append('rect')
          .attr('class', 'book')
          .attr('width', '16')
          .attr('height', '24')
          .attr('fill', 'none')
          // .attr('stroke', '#c5becc')
          // .attr('stroke-width', '3')

      enterCanon
        .append("svg:image")
          .attr('class', 'img')
          .attr("xlink:href", (d,i) =>  {return d.coverSM })

      canonMerged
        // hover effect
        .on('mouseover', function () {
          d3.select(this).raise()
        })
        // grabbing info -> infobox
        .on('click', function (d) { return sendInfo(d) } )
    }

    // calling function on load, default linear
   let scaleSelect = 'expScale'
    console.log('1. scale on page load (default)', scaleSelect, '\n')
    charter(scaleSelect)

    // SELECT UPDATE FUNCTION
    // need to set up for dynamic behaviour (switching scales)
    // behaviour for translating along the x-axis goes here (switching linear => log)
    // d3.selectAll('select.scale').on('input', function() {
    //     scaleSelect = this.value
    //     console.log('scale selected in with dropdown: ', scaleSelect, '\n')
    //     charter(scaleSelect);
    // });


}) // error handling
  .catch(function (error) {
    if (error) throw error;
  })

console.log("‧₊˚✩", "reached end of script", "✩˚₊‧")


