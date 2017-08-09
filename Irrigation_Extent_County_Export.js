//_____Eric Chance______Virginia Tech_______2017

//Manually set the thresholdz:
var t1984 =0.3140625;
var t1985 =0.290625;
var t1986 =0.336458333333333;
var t1987 =0.286979166666667;
var t1988 =0.284895833333333;
var t1989 =0.3078125;
var t1990 =0.298958333333333;
var t1991 =0.31875;
var t1992 =0.246354166666667;
var t1993 =0.353125;
var t1994 =0.320833333333333;
var t1995 =0.383854166666667;
var t1996 =0.3859375;
var t1997 =0.383333333333333;
var t1998 =0.4109375;
var t1999 =0.350520833333333;
var t2000 =0.35;
var t2001 =0.264583333333333;
var t2002 =0.3375;
var t2003 =0.342708333333333;
var t2004 =0.367708333333333;
var t2005 =0.4078125;
var t2006 =0.339583333333333;
var t2007 =0.344270833333333;
var t2008 =0.344791666666667;
var t2009 =0.383854166666667;
var t2010 =0.357291666666667;
var t2011 =0.3703125;
var t2012 =0.3171875;
var t2013 =0.323958333333333;
var t2014 =0.330729166666667;
var t2015 =0.3859375;
var t2016 =0.410416666666667;


//add counties
var fc = ee.FeatureCollection("ft:1vduVGOs9LB6TnXDC-nuNyOxtTbSl0W2nEca83iSq");
Map.addLayer(fc, {color: 'FFFFFF'}, 'From Fusion Table');

//Add Landsat 5
var collection = ee.ImageCollection('LANDSAT/LT5_SR')
  .set('SENSOR_ID', 'TM');
//Landsat 8
var collection8 = ee.ImageCollection('LANDSAT/LC8_SR')
  .set('SENSOR_ID', 'OLI_TIRS');
//Landast 7
var collection7 = ee.ImageCollection('LANDSAT/LE7_SR')
  .set('SENSOR_ID', 'TM');


//add ndwi landsat 8
var addNDWI8 = function(image) {return image.addBands(image.normalizedDifference(['B5', 'B6']));};
//add ndwi Landsat 7
  var addNDWI7 = function(image) {return image.addBands(image.normalizedDifference(['B4', 'B5']));};
var collection7b=collection7.map(addNDWI7);
var collection8b=collection8.map(addNDWI8);
//add ndwi landsat 5
var addNDWI = function(image) {return image.addBands(image.normalizedDifference(['B4', 'B5']));};
var collection5b=collection.map(addNDWI);

//mask clouds and stuff
var maskClouds = function(image) {return image.updateMask(image.select(['cfmask']).lt(0.9));};
var collection7c=collection7b.map(maskClouds);
var collection8c=collection8b.map(maskClouds);
var collection5c=collection5b.map(maskClouds);

//remove other bands
var ndwi_base5 = collection5c.select(['nd']);
var ndwi_base7 = collection7c.select(['nd']);
var ndwi_base8 = collection8c.select(['nd']);


//pull data for each growing season
var ls1984= ndwi_base5.filterDate('1984-04-01', '1984-10-31');
var ls1985= ndwi_base5.filterDate('1985-04-01', '1985-10-31');
var ls1986= ndwi_base5.filterDate('1986-04-01', '1986-10-31');
var ls1987= ndwi_base5.filterDate('1987-04-01', '1987-10-31');
var ls1988= ndwi_base5.filterDate('1988-04-01', '1988-10-31');
var ls1989= ndwi_base5.filterDate('1989-04-01', '1989-10-31');
var ls1990= ndwi_base5.filterDate('1990-04-01', '1990-10-31');
var ls1991= ndwi_base5.filterDate('1991-04-01', '1991-10-31');
var ls1992= ndwi_base5.filterDate('1992-04-01', '1992-10-31');
var ls1993= ndwi_base5.filterDate('1993-04-01', '1993-10-31');
var ls1994= ndwi_base5.filterDate('1994-04-01', '1994-10-31');
var ls1995= ndwi_base5.filterDate('1995-04-01', '1995-10-31');
var ls1996= ndwi_base5.filterDate('1996-04-01', '1996-10-31');
var ls1997= ndwi_base5.filterDate('1997-04-01', '1997-10-31');
var ls1998= ndwi_base5.filterDate('1998-04-01', '1998-10-31');
var ls1999= ndwi_base5.filterDate('1999-04-01', '1999-10-31');
var ls2000= ndwi_base5.filterDate('2000-04-01', '2000-10-31');
var ls2001= ndwi_base5.filterDate('2001-04-01', '2001-10-31');
var ls2002= ndwi_base5.filterDate('2002-04-01', '2002-10-31');
var ls2003= ndwi_base5.filterDate('2003-04-01', '2003-10-31');
var ls2004= ndwi_base5.filterDate('2004-04-01', '2004-10-31');
var ls2005= ndwi_base5.filterDate('2005-04-01', '2005-10-31');
var ls2006= ndwi_base5.filterDate('2006-04-01', '2006-10-31');
var ls2007= ndwi_base5.filterDate('2007-04-01', '2007-10-31');
var ls2008= ndwi_base5.filterDate('2008-04-01', '2008-10-31');
var ls2009= ndwi_base5.filterDate('2009-04-01', '2009-10-31');
var ls2010= ndwi_base5.filterDate('2010-04-01', '2010-10-31');
var ls2011= ndwi_base5.filterDate('2011-04-01', '2011-10-31');
var ls2012= ndwi_base7.filterDate('2012-04-01', '2012-10-31');
var ls2013= ndwi_base8.filterDate('2013-04-01', '2013-10-31');
var ls2014= ndwi_base8.filterDate('2014-04-01', '2014-10-31');
var ls2015= ndwi_base8.filterDate('2015-04-01', '2015-10-31');
var ls2016= ndwi_base8.filterDate('2016-04-01', '2016-10-31');


//take max
var max1984 = ls1984.max();
var max1985 = ls1985.max();
var max1986 = ls1986.max();
var max1987 = ls1987.max();
var max1988 = ls1988.max();
var max1989 = ls1989.max();
var max1990 = ls1990.max();
var max1991 = ls1991.max();
var max1992 = ls1992.max();
var max1993 = ls1993.max();
var max1994 = ls1994.max();
var max1995 = ls1995.max();
var max1996 = ls1996.max();
var max1997 = ls1997.max();
var max1998 = ls1998.max();
var max1999 = ls1999.max();
var max2000 = ls2000.max();
var max2001 = ls2001.max();
var max2002 = ls2002.max();
var max2003 = ls2003.max();
var max2004 = ls2004.max();
var max2005 = ls2005.max();
var max2006 = ls2006.max();
var max2007 = ls2007.max();
var max2008 = ls2008.max();
var max2009 = ls2009.max();
var max2010 = ls2010.max();
var max2011 = ls2011.max();
var max2012 = ls2012.max();
var max2013 = ls2013.max();
var max2014 = ls2014.max();
var max2015 = ls2015.max();
var max2016 = ls2016.max();

// Create Classified image 1 for irrigated 0 for non for each year
var class1984 = max1984.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t1984)})
var class1985 = max1985.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t1985)})
var class1986 = max1986.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t1986)})
var class1987 = max1987.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t1987)})
var class1988 = max1988.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t1988)})
var class1989 = max1989.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t1989)})
var class1990 = max1990.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t1990)})
var class1991 = max1991.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t1991)})
var class1992 = max1992.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t1992)})
var class1993 = max1993.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t1993)})
var class1994 = max1994.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t1994)})
var class1995 = max1995.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t1995)})
var class1996 = max1996.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t1996)})
var class1997 = max1997.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t1997)})
var class1998 = max1998.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t1998)})
var class1999 = max1999.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t1999)})
var class2000 = max2000.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t2000)})
var class2001 = max2001.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t2001)})
var class2002 = max2002.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t2002)})
var class2003 = max2003.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t2003)})
var class2004 = max2004.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t2004)})
var class2005 = max2005.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t2005)})
var class2006 = max2006.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t2006)})
var class2007 = max2007.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t2007)})
var class2008 = max2008.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t2008)})
var class2009 = max2009.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t2009)})
var class2010 = max2010.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t2010)})
var class2011 = max2011.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t2011)})
var class2012 = max2012.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t2012)})
var class2013 = max2013.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t2013)})
var class2014 = max2014.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t2014)})
var class2015 = max2015.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t2015)})
var class2016 = max2016.expression("(b('nd') > t) ? 1" + ": 0",  {'t': (t2016)})


//classified_and masked display
var cm1984 = ee.Image(0).where(class1984.select('constant').gte(1), 1)
var cm1985 = ee.Image(0).where(class1985.select('constant').gte(1), 1)
var cm1986 = ee.Image(0).where(class1986.select('constant').gte(1), 1)
var cm1987 = ee.Image(0).where(class1987.select('constant').gte(1), 1)
var cm1988 = ee.Image(0).where(class1988.select('constant').gte(1), 1)
var cm1989 = ee.Image(0).where(class1989.select('constant').gte(1), 1)
var cm1990 = ee.Image(0).where(class1990.select('constant').gte(1), 1)
var cm1991 = ee.Image(0).where(class1991.select('constant').gte(1), 1)
var cm1992 = ee.Image(0).where(class1992.select('constant').gte(1), 1)
var cm1993 = ee.Image(0).where(class1993.select('constant').gte(1), 1)
var cm1994 = ee.Image(0).where(class1994.select('constant').gte(1), 1)
var cm1995 = ee.Image(0).where(class1995.select('constant').gte(1), 1)
var cm1996 = ee.Image(0).where(class1996.select('constant').gte(1), 1)
var cm1997 = ee.Image(0).where(class1997.select('constant').gte(1), 1)
var cm1998 = ee.Image(0).where(class1998.select('constant').gte(1), 1)
var cm1999 = ee.Image(0).where(class1999.select('constant').gte(1), 1)
var cm2000 = ee.Image(0).where(class2000.select('constant').gte(1), 1)
var cm2001 = ee.Image(0).where(class2001.select('constant').gte(1), 1)
var cm2002 = ee.Image(0).where(class2002.select('constant').gte(1), 1)
var cm2003 = ee.Image(0).where(class2003.select('constant').gte(1), 1)
var cm2004 = ee.Image(0).where(class2004.select('constant').gte(1), 1)
var cm2005 = ee.Image(0).where(class2005.select('constant').gte(1), 1)
var cm2006 = ee.Image(0).where(class2006.select('constant').gte(1), 1)
var cm2007 = ee.Image(0).where(class2007.select('constant').gte(1), 1)
var cm2008 = ee.Image(0).where(class2008.select('constant').gte(1), 1)
var cm2009 = ee.Image(0).where(class2009.select('constant').gte(1), 1)
var cm2010 = ee.Image(0).where(class2010.select('constant').gte(1), 1)
var cm2011 = ee.Image(0).where(class2011.select('constant').gte(1), 1)
var cm2012 = ee.Image(0).where(class2012.select('constant').gte(1), 1)
var cm2013 = ee.Image(0).where(class2013.select('constant').gte(1), 1)
var cm2014 = ee.Image(0).where(class2014.select('constant').gte(1), 1)
var cm2015 = ee.Image(0).where(class2015.select('constant').gte(1), 1)
var cm2016 = ee.Image(0).where(class2016.select('constant').gte(1), 1)


///////Display
////////////////////unblock off line to display shiz for that year////////////////////
//Map.addLayer(cm1984.mask(cm1984),{palette:'369b47'},'classified_1984');
//Map.addLayer(max1984, {palette: '000000, FFFFFF', min: -.2, max: .6}, 'ndmi max 1984');
//Map.addLayer(cm1985.mask(cm1985),{palette:'369b47'},'classified_1985');
//Map.addLayer(cm1986.mask(cm1986),{palette:'369b47'},'classified_1986');
//Map.addLayer(cm1987.mask(cm1987),{palette:'369b47'},'classified_1987');
//Map.addLayer(cm1988.mask(cm1988),{palette:'369b47'},'classified_1988');
//Map.addLayer(cm1989.mask(cm1989),{palette:'369b47'},'classified_1989');
//Map.addLayer(cm1990.mask(cm1990),{palette:'369b47'},'classified_1990');
//Map.addLayer(cm1991.mask(cm1991),{palette:'369b47'},'classified_1991');
//Map.addLayer(cm1992.mask(cm1992),{palette:'369b47'},'classified_1992');
//Map.addLayer(cm1993.mask(cm1993),{palette:'369b47'},'classified_1993');
//Map.addLayer(cm1994.mask(cm1994),{palette:'369b47'},'classified_1994');
//Map.addLayer(cm1995.mask(cm1995),{palette:'369b47'},'classified_1995');
//Map.addLayer(cm1996.mask(cm1996),{palette:'369b47'},'classified_1996');
//Map.addLayer(cm1997.mask(cm1997),{palette:'369b47'},'classified_1997');
//Map.addLayer(cm1998.mask(cm1998),{palette:'369b47'},'classified_1998');
//Map.addLayer(cm1999.mask(cm1999),{palette:'369b47'},'classified_1999');
//Map.addLayer(cm2000.mask(cm2000),{palette:'369b47'},'classified_2000');
//Map.addLayer(cm2001.mask(cm2001),{palette:'369b47'},'classified_2001');
//Map.addLayer(cm2002.mask(cm2002),{palette:'369b47'},'classified_2002');
Map.addLayer(cm2003.mask(cm2003),{palette:'369b47'},'classified_2003');
Map.addLayer(cm2004.mask(cm2004),{palette:'369b47'},'classified_2004');
Map.addLayer(cm2005.mask(cm2005),{palette:'369b47'},'classified_2005');
Map.addLayer(cm2006.mask(cm2006),{palette:'369b47'},'classified_2006');
//Map.addLayer(cm2007.mask(cm2007),{palette:'369b47'},'classified_2007');
//Map.addLayer(cm2008.mask(cm2008),{palette:'369b47'},'classified_2008');
//Map.addLayer(cm2009.mask(cm2009),{palette:'369b47'},'classified_2009');
//Map.addLayer(cm2010.mask(cm2010),{palette:'369b47'},'classified_2010');
//Map.addLayer(cm2011.mask(cm2011),{palette:'369b47'},'classified_2011');
//Map.addLayer(cm2012.mask(cm2012),{palette:'369b47'},'classified_2012');
//Map.addLayer(cm2013.mask(cm2013),{palette:'369b47'},'classified_2013');
//Map.addLayer(cm2014.mask(cm2014),{palette:'369b47'},'classified_2014');
//Map.addLayer(cm2015.mask(cm2015),{palette:'369b47'},'classified_2015');
//Map.addLayer(cm2016.mask(cm2016),{palette:'00ff47'},'classified_2016');


/////////////// make 5 year history layers (1 if irrigated any time in the past 5 years)
var classpile= class1985.addBands([class1986, class1987, class1988, class1989, class1990, class1991, class1992, class1993, class1994, class1995, class1996, class1997, class1998, class1999, class2000, class2001, class2002, class2003, class2004, class2005, class2006, class2007, class2008, class2009, class2010, class2011, class2012, class2013, class2014, class2015, class2016, class1984]);
//Map.addLayer(classpile);
var lt_class1988 = classpile.expression("((b('constant_31')+b('constant_2')+b('constant_1_1')+b('constant_1')+b('constant')) > .9) ? 1" + ": 0");
var lt_class1989 = classpile.expression("((b('constant_3')+b('constant_2')+b('constant_1_1')+b('constant_1')+b('constant')) > .9) ? 1" + ": 0");
var lt_class1990 = classpile.expression("((b('constant_4')+b('constant_3')+b('constant_2')+b('constant_1_1')+b('constant_1')) > .9) ? 1" + ": 0");
var lt_class1991 = classpile.expression("((b('constant_5')+b('constant_4')+b('constant_3')+b('constant_2')+b('constant_1_1')) > .9) ? 1" + ": 0");
var lt_class1992 = classpile.expression("((b('constant_6')+b('constant_5')+b('constant_4')+b('constant_3')+b('constant_2')) > .9) ? 1" + ": 0");
var lt_class1993 = classpile.expression("((b('constant_7')+b('constant_6')+b('constant_5')+b('constant_4')+b('constant_3')) > .9) ? 1" + ": 0");
var lt_class1994 = classpile.expression("((b('constant_8')+b('constant_7')+b('constant_6')+b('constant_5')+b('constant_4')) > .9) ? 1" + ": 0");
var lt_class1995 = classpile.expression("((b('constant_9')+b('constant_8')+b('constant_7')+b('constant_6')+b('constant_5')) > .9) ? 1" + ": 0");
var lt_class1996 = classpile.expression("((b('constant_10')+b('constant_9')+b('constant_8')+b('constant_7')+b('constant_6')) > .9) ? 1" + ": 0");
var lt_class1997 = classpile.expression("((b('constant_11')+b('constant_10')+b('constant_9')+b('constant_8')+b('constant_7')) > .9) ? 1" + ": 0");
var lt_class1998 = classpile.expression("((b('constant_12')+b('constant_11')+b('constant_10')+b('constant_9')+b('constant_8')) > .9) ? 1" + ": 0");
var lt_class1999 = classpile.expression("((b('constant_13')+b('constant_12')+b('constant_11')+b('constant_10')+b('constant_9')) > .9) ? 1" + ": 0");
var lt_class2000 = classpile.expression("((b('constant_14')+b('constant_13')+b('constant_12')+b('constant_11')+b('constant_10')) > .9) ? 1" + ": 0");
var lt_class2001 = classpile.expression("((b('constant_15')+b('constant_14')+b('constant_13')+b('constant_12')+b('constant_11')) > .9) ? 1" + ": 0");
var lt_class2002 = classpile.expression("((b('constant_16')+b('constant_15')+b('constant_14')+b('constant_13')+b('constant_12')) > .9) ? 1" + ": 0");
var lt_class2003 = classpile.expression("((b('constant_17')+b('constant_16')+b('constant_15')+b('constant_14')+b('constant_13')) > .9) ? 1" + ": 0");
var lt_class2004 = classpile.expression("((b('constant_18')+b('constant_17')+b('constant_16')+b('constant_15')+b('constant_14')) > .9) ? 1" + ": 0");
var lt_class2005 = classpile.expression("((b('constant_19')+b('constant_18')+b('constant_17')+b('constant_16')+b('constant_15')) > .9) ? 1" + ": 0");
var lt_class2006 = classpile.expression("((b('constant_20')+b('constant_19')+b('constant_18')+b('constant_17')+b('constant_16')) > .9) ? 1" + ": 0");
var lt_class2007 = classpile.expression("((b('constant_21')+b('constant_20')+b('constant_19')+b('constant_18')+b('constant_17')) > .9) ? 1" + ": 0");
var lt_class2008 = classpile.expression("((b('constant_22')+b('constant_21')+b('constant_20')+b('constant_19')+b('constant_18')) > .9) ? 1" + ": 0");
var lt_class2009 = classpile.expression("((b('constant_23')+b('constant_22')+b('constant_21')+b('constant_20')+b('constant_19')) > .9) ? 1" + ": 0");
var lt_class2010 = classpile.expression("((b('constant_24')+b('constant_23')+b('constant_22')+b('constant_21')+b('constant_20')) > .9) ? 1" + ": 0");
var lt_class2011 = classpile.expression("((b('constant_25')+b('constant_24')+b('constant_23')+b('constant_22')+b('constant_21')) > .9) ? 1" + ": 0");
var lt_class2012 = classpile.expression("((b('constant_26')+b('constant_25')+b('constant_24')+b('constant_23')+b('constant_22')) > .9) ? 1" + ": 0");
var lt_class2013 = classpile.expression("((b('constant_27')+b('constant_26')+b('constant_25')+b('constant_24')+b('constant_23')) > .9) ? 1" + ": 0");
var lt_class2014 = classpile.expression("((b('constant_28')+b('constant_27')+b('constant_26')+b('constant_25')+b('constant_24')) > .9) ? 1" + ": 0");
var lt_class2015 = classpile.expression("((b('constant_29')+b('constant_28')+b('constant_27')+b('constant_26')+b('constant_25')) > .9) ? 1" + ": 0");
//var lt_class2016 = classpile.expression("((b('constant_30')+b('constant_29')+b('constant_28')+b('constant_27')+b('constant_26')) > .9) ? 1" + ": 0");
//2016_exlcuding using 2011 instead of 2012 (cause landsat 7 sucks)
var lt_class2016 = classpile.expression("((b('constant_30')+b('constant_29')+b('constant_28')+b('constant_27')+b('constant_25')) > .9) ? 1" + ": 0");




///long term differences
///Change years here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var classified_old = lt_class1988.expression("(b('constant') > .9) ? 10" + ": 0");
var classified_new = lt_class2016.expression("(b('constant') > .9) ? 5" + ": 0");




//map 84 ndwi to make sure it looks good
var combo = classified_old.add(classified_new);

// Define an SLD style of discrete intervals to apply to the image.
var sld_intervals =
'<RasterSymbolizer>' +
 ' <ColorMap  type="intervals" extended="false" >' +
    '<ColorMapEntry color="#000000" quantity="0" label="non"/>' +
    '<ColorMapEntry color="#0101FF" quantity="5" label="added"/>' +
    '<ColorMapEntry color="#FF0101" quantity="10" label="removed"/>' +
    '<ColorMapEntry color="#369b47" quantity="15" label="continous"/>' +
   '</ColorMap>' +
'</RasterSymbolizer>';
//Map.addLayer(combo.sldStyle(sld_intervals), {}, 'Changes');


////////////////////DISPLAY CHANGES
//Map.addLayer(combo.sldStyle(sld_intervals).mask(combo.sldStyle(sld_intervals)),{},'classified_and_masked_Changes');
//NLCD 2006 masking
var a2006= ee.Image('USGS/NLCD/NLCD2006');
//remove other bands
var l06 = a2006.select(['landcover']);
//mask everything (including urban)
//var all_mask = l06.expression("(b('landcover') > 49) ? 1" + ": 0");
//var combo2 =combo.multiply(all_mask)
//Map.addLayer(all_mask);
//Map.addLayer(combo2.sldStyle(sld_intervals).mask(combo2.sldStyle(sld_intervals)),{},'classified_and_masked2_Changes');

//mask everything but urban
var a = l06.expression("(b('landcover') > 20) ? 1" + ": 0");
var b = l06.expression("(b('landcover') < 30 ) ? 1" + ": 0");
//var c = l06.expression("(b('landcover') > 40 ) ? 1" + ": 0");
var c = l06.expression("(b('landcover') > 53 ) ? 1" + ": 0");
var xx = a.multiply(b);
var xxx = xx.add(c);
var combo3 =combo.multiply(xxx);
Map.addLayer(combo3.sldStyle(sld_intervals).mask(combo3.sldStyle(sld_intervals)),{},'classified_and_masked3_Changes');

////////////////////////////////////////////
/////////////////////////////////////////// Masking and exporting etent for each year & county
///////////////masking for each year
var m_class1984 = class1984.multiply(xxx);
var m_class1985 = class1985.multiply(xxx);
var m_class1986 = class1986.multiply(xxx);
var m_class1987 = class1987.multiply(xxx);
var m_class1988 = class1988.multiply(xxx);
var m_class1989 = class1989.multiply(xxx);
var m_class1990 = class1990.multiply(xxx);
var m_class1991 = class1991.multiply(xxx);
var m_class1992 = class1992.multiply(xxx);
var m_class1993 = class1993.multiply(xxx);
var m_class1994 = class1994.multiply(xxx);
var m_class1995 = class1995.multiply(xxx);
var m_class1996 = class1996.multiply(xxx);
var m_class1997 = class1997.multiply(xxx);
var m_class1998 = class1998.multiply(xxx);
var m_class1999 = class1999.multiply(xxx);
var m_class2000 = class2000.multiply(xxx);
var m_class2001 = class2001.multiply(xxx);
var m_class2002 = class2002.multiply(xxx);
var m_class2003 = class2003.multiply(xxx);
var m_class2004 = class2004.multiply(xxx);
var m_class2005 = class2005.multiply(xxx);
var m_class2006 = class2006.multiply(xxx);
var m_class2007 = class2007.multiply(xxx);
var m_class2008 = class2008.multiply(xxx);
var m_class2009 = class2009.multiply(xxx);
var m_class2010 = class2010.multiply(xxx);
var m_class2011 = class2011.multiply(xxx);
var m_class2012 = class2012.multiply(xxx);
var m_class2013 = class2013.multiply(xxx);
var m_class2014 = class2014.multiply(xxx);
var m_class2015 = class2015.multiply(xxx);
var m_class2016 = class2016.multiply(xxx);

var count1984 = m_class1984.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});
var count1985 = m_class1985.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});
var count1986 = m_class1986.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});
var count1987 = m_class1987.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});
var count1988 = m_class1988.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});
var count1989 = m_class1989.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});
var count1990 = m_class1990.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});
var count1991 = m_class1991.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});
var count1992 = m_class1992.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});
var count1993 = m_class1993.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});
var count1994 = m_class1994.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});
var count1995 = m_class1995.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});
var count1996 = m_class1996.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});
var count1997 = m_class1997.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});
var count1998 = m_class1998.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});
var count1999 = m_class1999.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});
var count2000 = m_class2000.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});
var count2001 = m_class2001.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});
var count2002 = m_class2002.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});
var count2003 = m_class2003.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});
var count2004 = m_class2004.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});
var count2005 = m_class2005.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});
var count2006 = m_class2006.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});
var count2007 = m_class2007.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});
var count2008 = m_class2008.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});
var count2009 = m_class2009.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});
var count2010 = m_class2010.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});
var count2011 = m_class2011.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});
var count2012 = m_class2012.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});
var count2013 = m_class2013.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});
var count2014 = m_class2014.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});
var count2015 = m_class2015.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});
var count2016 = m_class2016.reduceRegions({collection: fc, reducer: ee.Reducer.sum(), scale: 30, crs:  "EPSG:32611"});

Export.table.toDrive(count1984, "irr_area_count_1984");
Export.table.toDrive(count1985, "irr_area_count_1985");
Export.table.toDrive(count1986, "irr_area_count_1986");
Export.table.toDrive(count1987, "irr_area_count_1987");
Export.table.toDrive(count1988, "irr_area_count_1988");
Export.table.toDrive(count1989, "irr_area_count_1989");
Export.table.toDrive(count1990, "irr_area_count_1990");
Export.table.toDrive(count1991, "irr_area_count_1991");
Export.table.toDrive(count1992, "irr_area_count_1992");
Export.table.toDrive(count1993, "irr_area_count_1993");
Export.table.toDrive(count1994, "irr_area_count_1994");
Export.table.toDrive(count1995, "irr_area_count_1995");
Export.table.toDrive(count1996, "irr_area_count_1996");
Export.table.toDrive(count1997, "irr_area_count_1997");
Export.table.toDrive(count1998, "irr_area_count_1998");
Export.table.toDrive(count1999, "irr_area_count_1999");
Export.table.toDrive(count2000, "irr_area_count_2000");
Export.table.toDrive(count2001, "irr_area_count_2001");
Export.table.toDrive(count2002, "irr_area_count_2002");
Export.table.toDrive(count2003, "irr_area_count_2003");
Export.table.toDrive(count2004, "irr_area_count_2004");
Export.table.toDrive(count2005, "irr_area_count_2005");
Export.table.toDrive(count2006, "irr_area_count_2006");
Export.table.toDrive(count2007, "irr_area_count_2007");
Export.table.toDrive(count2008, "irr_area_count_2008");
Export.table.toDrive(count2009, "irr_area_count_2009");
Export.table.toDrive(count2010, "irr_area_count_2010");
Export.table.toDrive(count2011, "irr_area_count_2011");
Export.table.toDrive(count2012, "irr_area_count_2012");
Export.table.toDrive(count2013, "irr_area_count_2013");
Export.table.toDrive(count2014, "irr_area_count_2014");
Export.table.toDrive(count2015, "irr_area_count_2015");
Export.table.toDrive(count2016, "irr_area_count_2016");



