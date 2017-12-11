AmCharts.makeChart("chartdiv",
{
    "type": "serial",
    "categoryField": "category",
    "startDuration": 1,
    "theme": "black",
    "categoryAxis": {
        "classNameField": "",
        "gridPosition": "start",
        "title": "Temperatūra (C)",
        "titleColor": "#FFFFFF",
        "titleFontSize": 11
    },
    "trendLines": [],
    "graphs": [
        {
            "balloonText": "<b>[[title]]</b>\nChange in Temperature: [[category]]\nLinear Expansion: [[value]]",
            "bullet": "round",
            "bulletHitAreaSize": -2,
            "fixedColumnWidth": -1,
            "id": "Varis",
            "lineColor": "#FF8000",
            "precision": 2,
            "title": "Varis",
            "valueField": "Varis"
        },
        {
            "balloonText": "<b>[[title]]</b>\nChange in Temperature: [[category]]\nLinear Expansion: [[value]]",
            "bullet": "round",
            "bulletHitAreaSize": -2,
            "id": "Cinkas",
            "lineColor": "#34FF00",
            "periodSpan": 4,
            "tabIndex": -6,
            "title": "Cinkas",
            "valueField": "Cinkas"
        },
        {
            "balloonText": "<b>[[title]]</b>\nChange in Temperature: [[category]]\nLinear Expansion: [[value]]",
            "bullet": "round",
            "bulletHitAreaSize": -1,
            "cursorBulletAlpha": 0,
            "customBullet": "",
            "id": "Volframas",
            "lineColor": "#FF0000",
            "tabIndex": 1,
            "title": "Volframas",
            "valueField": "Volframas"
        },
        {
            "balloonText": "<b>[[title]]</b>\nChange in Temperature: [[category]]\nLinear Expansion: [[value]]",
            "bullet": "round",
            "id": "Sidabras",
            "lineColor": "#00F8FF",
            "title": "Sidabras",
            "valueField": "Sidabras"
        },
        {
            "balloonText": "<b>[[title]]</b>\nChange in Temperature: [[category]]\nLinear Expansion: [[value]]",
            "bullet": "round",
            "id": "Auksas",
            "lineColor": "#FFFF00",
            "title": "Auksas",
            "valueField": "Au"
        }
    ],
    "guides": [],
    "valueAxes": [
        {
            "id": "Pailgėjimas (mm)",
            "title": "Pailgėjimas (mm)",
            "titleRotation": 270
        }
    ],
    "allLabels": [],
    "balloon": {},
    "legend": {
        "enabled": true,
        "useGraphSettings": true
    },
    "titles": [
        {
            "id": "Title-1",
            "size": 13,
            "text": "Kietojo kūno pailgėjimas (kai pradinio kūno ilgis 1000mm)"
        }
    ],
    "dataProvider": [
        {
            "category": "0",
            "Varis": "0",
            "Cinkas": "0",
            "Volframas": "0",
            "Sidabras": "0",
            "Au": "0"
        },
        {
            "category": "10",
            "Varis": "0.165",
            "Cinkas": "0.29",
            "Volframas": "0.045",
            "Sidabras": "0.195",
            "Au": "0.142"
        },
        {
            "category": "20",
            "Varis": "0.33",
            "Cinkas": "0.58",
            "Volframas": "0.09",
            "Sidabras": "0.39",
            "Au": "0.284"
        },
        {
            "category": "30",
            "Varis": "0.495",
            "Cinkas": "0.87",
            "Volframas": "0.135",
            "Sidabras": "0.585",
            "Au": "0.426"
        },
        {
            "category": "40",
            "Varis": "0.66",
            "Cinkas": "1.16",
            "Volframas": "0.18",
            "Sidabras": "0.78",
            "Au": "0.568"
        },
        {
            "category": "50",
            "Varis": "0.825",
            "Cinkas": "1.45",
            "Volframas": "0.225",
            "Sidabras": "0.975",
            "Au": "0.71"
        },
        {
            "category": "60",
            "Varis": "0.99",
            "Cinkas": "1.74",
            "Volframas": "0.27",
            "Sidabras": "1.17",
            "Au": "0.852"
        },
        {
            "category": "70",
            "Varis": "1.155",
            "Cinkas": "2.03",
            "Volframas": "0.315",
            "Sidabras": "1.365",
            "Au": "0.994"
        },
        {
            "category": "80",
            "Varis": "1.32",
            "Cinkas": "2.32",
            "Volframas": "0.36",
            "Sidabras": "1.56",
            "Au": "1.136"
        },
        {
            "category": "90",
            "Varis": "1.485",
            "Cinkas": "2.61",
            "Volframas": "0.405",
            "Sidabras": "1.755",
            "Au": "1.278"
        },
        {
            "category": "100",
            "Varis": "1.65",
            "Cinkas": "2.9",
            "Volframas": "0.45",
            "Sidabras": "1.95",
            "Au": "1.42"
        }
    ]
}
);