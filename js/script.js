// Copyright (c) 2023 Osamah Hasan All rights reserved
//
// Created by: Osamah Hasan
// Created on: Mar 2023
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of Triangle.
 */
function calculate () {
  // input
  const H = parseInt(document.getElementById('Hight of Trapezoid').value)
  const A = parseInt(document.getElementById('A of Trapezoid').value)
  const B = parseInt(document.getElementById('B of Trapezoid').value)

  // process
  const area = [(A + B) / 2] * H

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' mm² '
}