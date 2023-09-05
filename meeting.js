import { Client } from "@notionhq/client"
import config from './config.json' assert {type: 'json'};
import dayjs from "dayjs";

// url = 'https://www.notion.so/1435e3b5972d42279b5fba67a4c991bd?v=9855559037494445a1bcbffc0cd748ef'
const token = config.token
// const dbId = "adcfffdf79cc4bd08600c9a656702237" // 개인
const dbId = "1435e3b5972d42279b5fba67a4c991bd"
// const pageId = "15e0386ca00441cd8085e9021b62c9f3"
const pageId = '6d731267d47e4f628e79a3545e5365cc'

var now = dayjs();

// const { Client } = require("@notionhq/client")

const notion = new Client({
        auth: token,
        })

        async function addItem(date, theme, meetingType, people, preRead) {
                var children = [
                        {
                                object: 'block',
                                type: 'heading_1', 
                                heading_1: {
                                        rich_text: [
                                                {
                                                        type: 'text',
                                                        text: {
                                                                content: '회의록 정리'
                                                        }
                                                }
                                        ],
                                        children: [{
                                                object: 'block',
                                                type: 'heading_3',
                                                heading_3: {
                                                        rich_text: [
                                                                {
                                                                        type: 'text',
                                                                        text: {
                                                                                content: '기존에 회의하려고 했던 안건'
                                                                        },
                                                                        
                                                                }
                                                        ],
                                                        color: 'orange_background'
                                                }
                                        },
                                        {
                                                object: 'block',
                                                type: 'paragraph',
                                                paragraph:{
                                                        rich_text : [
                                                                {
                                                                        type: 'text',
                                                                        text: {
                                                                                content : ''
                                                                        }
                                                                }
                                                        ]
                                                }
                                        },
                                        {
                                                object: 'block',
                                                type: 'heading_3',
                                                heading_3: {
                                                        rich_text: [
                                                                {
                                                                        type: 'text',
                                                                        text: {
                                                                                content: '실제로 회의에서 진행한 안건'
                                                                        },
                                                                        
                                                                }
                                                        ],
                                                        color: 'orange_background'
                                                }
                                        },
                                        {
                                                object: 'block',
                                                type: 'paragraph',
                                                paragraph:{
                                                        rich_text : [
                                                                {
                                                                        type: 'text',
                                                                        text: {
                                                                                content : ''
                                                                        }
                                                                }
                                                        ]
                                                }
                                        },
                                        {
                                                object: 'block',
                                                type: 'heading_3',
                                                heading_3: {
                                                        rich_text: [
                                                                {
                                                                        type: 'text',
                                                                        text: {
                                                                                content: '안건이 추가/변경된 이유'
                                                                        },
                                                                        
                                                                }
                                                        ],
                                                        color: 'orange_background'
                                                }
                                        },
                                        {
                                                object: 'block',
                                                type: 'paragraph',
                                                paragraph:{
                                                        rich_text : [
                                                                {
                                                                        type: 'text',
                                                                        text: {
                                                                                content : ''
                                                                        }
                                                                }
                                                        ]
                                                }
                                        },
                                        {
                                                object: 'block',
                                                type: 'heading_3',
                                                heading_3: {
                                                        rich_text: [
                                                                {
                                                                        type: 'text',
                                                                        text: {
                                                                                content: '전체 내용 구조도'
                                                                        },
                                                                        
                                                                }
                                                        ],
                                                        color: 'orange_background'
                                                }
                                        },
                                        ],
                                        is_toggleable: true
                                }
                        },
                        {
                                object: 'block',
                                type: 'heading_1',
                                heading_1: {
                                        rich_text: [
                                        {
                                        type: 'text',
                                        text: {
                                                content: '결론',
                                        },
                                        annotations:{
                                                bold: true
                                        }
                                        },
                                        ],
                                        color : "yellow_background",
                                        
                                },     
                        },
                        {
                                object: 'block',
                                type: 'paragraph',
                                paragraph:{
                                        rich_text : [
                                                {
                                                        type: 'text',
                                                        text: {
                                                                content : ''
                                                        }
                                                }
                                        ]
                                }
                        },
                        {
                                object: 'block',
                                type: 'heading_1',
                                heading_1: {
                                        rich_text: [
                                        {
                                        type: 'text',
                                        text: {
                                                content: '회의 전 작성',
                                        },
                                        annotations:{
                                                bold: true
                                        }
                                        },
                                        ],
                                        color : "green_background",
                                        
                                }, 
                        }];
                if (preRead){
                        children.push({
                                object: 'block',
                                type: 'heading_2',
                                heading_2: {
                                        rich_text: [
                                        {
                                        type: 'text',
                                        text: {
                                                content: '0. 회의 전 체크',
                                        },
                                        annotations:{
                                                bold: true,
                                                color : "pink_background",
                                        }
                                        },
                                        ],
                                        
                                }, 

                        },
                        {
                                object: 'block',
                                type: 'table',
                                table: {
                                        "table_width": 2,
                                        "has_column_header": true,
                                        "has_row_header": true,
                                        "children": [
                                          {
                                            "type": "table_row",
                                            "table_row": {
                                              "cells": [
                                                [
                                                      {
                                                              "type": "text",
                                                              "text": {
                                                                      "content": "사람"
                                                              }
                                                      }
                                                ],
                                                [
                                                      {
                                                              "type": "text",
                                                              "text": {
                                                                "content": "작성 완료"
                                                              }
                                                      }
                                                ],

                                              ]
                                            }
                                          },
                                          {
                                              "type": "table_row",
                                              "table_row": {
                                                "cells": [
                                                  [
                                                        {
                                                                "type": "text",
                                                                "text": {
                                                                        "content": "승혜"
                                                                }
                                                        }
                                                  ],
                                                  [
                                                        {
                                                                "type": "text",
                                                                "text": {
                                                                  "content": "✔️✖️"
                                                                }
                                                        }
                                                  ],
                                                  
                                                  

                                                ]
                                              }
                                            },
                                            {
                                                "type": "table_row",
                                                "table_row": {
                                                  "cells": [
                                                    [
                                                          {
                                                                  "type": "text",
                                                                  "text": {
                                                                          "content": "보경"
                                                                  }
                                                          }
                                                    ],
                                                    [
                                                          {
                                                                  "type": "text",
                                                                  "text": {
                                                                    "content": "✔️✖️"
                                                                  }
                                                          }
                                                    ],
                                                    
                                                    

                                                  ]
                                                }
                                              },
                                              {
                                                "type": "table_row",
                                                "table_row": {
                                                  "cells": [
                                                    [
                                                          {
                                                                  "type": "text",
                                                                  "text": {
                                                                          "content": "은수"
                                                                  }
                                                          }
                                                    ],
                                                    [
                                                          {
                                                                  "type": "text",
                                                                  "text": {
                                                                    "content": "✔️✖️"
                                                                  }
                                                          }
                                                    ],
                                                  
                                                    

                                                  ]
                                                }
                                              },
                                        ]
                                      }

                        })
                }
                children.push({        
                        object: 'block',
                        type: 'heading_2',
                        heading_2: {
                                rich_text: [
                                {
                                type: 'text',
                                text: {
                                        content: '1. 회의 안건',
                                },
                                annotations:{
                                        bold: true,
                                        color : "pink_background",
                                }
                                },
                                ],
                                
                        }, 
                },
                {
                        object: 'block',
                        type: 'paragraph',
                        paragraph:{
                                rich_text : [
                                        {
                                                type: 'text',
                                                text: {
                                                        content : ''
                                                }
                                        }
                                ]
                        }
                },
                {        
                        object: 'block',
                        type: 'heading_2',
                        heading_2: {
                                rich_text: [
                                {
                                type: 'text',
                                text: {
                                        content: '2. 회의 준비',
                                },
                                annotations:{
                                        bold: true,
                                        color : "pink_background",
                                }
                                },
                                ],
                                
                                
                        }, 
                },
                {
                        object: 'block',
                        type: 'paragraph',
                        paragraph:{
                                rich_text : [
                                        {
                                                type: 'text',
                                                text: {
                                                        content : ''
                                                }
                                        }
                                ]
                        }
                },
                {        
                        object: 'block',
                        type: 'heading_2',
                        heading_2: {
                                rich_text: [
                                {
                                type: 'text',
                                text: {
                                        content: '3. 회의 내용',
                                },
                                annotations:{
                                        bold: true,
                                        color : "pink_background",
                                }
                                },
                                ],
                                
                                
                        }, 
                },
                {
                        object: 'block',
                        type: 'paragraph',
                        paragraph:{
                                rich_text : [
                                        {
                                                type: 'text',
                                                text: {
                                                        content : ''
                                                }
                                        }
                                ]
                        }
                },
                {
                        object: "block",
                        type: "table",
                        table: {
                          "table_width": 4,
                          "has_column_header": true,
                          "has_row_header": false,
                          "children": [
                            {
                              "type": "table_row",
                              "table_row": {
                                "cells": [
                                  [
                                        {
                                                "type": "text",
                                                "text": {
                                                        "content": "시간"
                                                }
                                        }
                                  ],
                                  [
                                        {
                                                "type": "text",
                                                "text": {
                                                  "content": "안건"
                                                }
                                        }
                                  ],
                                  [
                                        {
                                                "type": "text",
                                                "text": {
                                                  "content": "목표 시간"
                                                }
                                        }
                                  ],
                                  [
                                        {
                                                "type": "text",
                                                "text": {
                                                  "content": "실제 시간"
                                                }
                                        }
                                  ],

                                ]
                              }
                            },
                            {
                                "type": "table_row",
                                "table_row": {
                                  "cells": [
                                    [
                                          {
                                                  "type": "text",
                                                  "text": {
                                                          "content": ""
                                                  }
                                          }
                                    ],
                                    [
                                          {
                                                  "type": "text",
                                                  "text": {
                                                    "content": ""
                                                  }
                                          }
                                    ],
                                    [
                                          {
                                                  "type": "text",
                                                  "text": {
                                                    "content": ""
                                                  }
                                          }
                                    ],
                                    [
                                          {
                                                  "type": "text",
                                                  "text": {
                                                    "content": ""
                                                  }
                                          }
                                    ],

                                  ]
                                }
                              },
                              
                          ]
                        }
                },
                {
                        object: 'block',
                        type: 'heading_1',
                        heading_1: {
                                rich_text: [
                                {
                                type: 'text',
                                text: {
                                        content: '회의 후 작성',
                                },
                                annotations:{
                                        bold: true
                                }
                                },
                                ],
                                color : "yellow_background",
                                
                        }, 
                },
                {
                        object: 'block',
                        type: 'paragraph',
                        paragraph:{
                                rich_text : [
                                        {
                                                type: 'text',
                                                text: {
                                                        content : 'https://www.notion.so/490b915cba4746f9b1dfd6c790d62223?v=4b7803e41bad4a0585d2036cced9f642',
                                                        link: {
                                                                type: 'link_preview',
                                                                url: 'https://www.notion.so/490b915cba4746f9b1dfd6c790d62223?v=4b7803e41bad4a0585d2036cced9f642',
                                                        }
                                                }
                                        }
                                ]
                        }
                })
                try {
                        const response = await notion.pages.create({
                                parent: { database_id: dbId },
                                icon: {
                                        type: "emoji",
                                                emoji: "📒"
                                },
                                properties: {
                                        title: { 
                                                title:[
                                                        {
                                                                "text": {
                                                                        "content": date + theme
                                                                }
                                                        }
                                                ]
                                        },
                                        "참석자": {
                                                people : people
                                        },
                                        "날짜":{
                                                date : {
                                                        // start : now.format('YYYY-MM-DD')
                                                        start : date
                                                }
                                        },
                                        "종류" : {
                                                select : {
                                                        name: meetingType
                                                }
                                        },
                                        "Team" : {
                                                multi_select :[
                                                        {name : "경영"},
                                                        {name : "데이터"},
                                                        {name : "기획"}
                                                ]
                                        },
                                        "단계" : {
                                                select:{
                                                        name: "회의전"
                                                }
                                        },
                                        "미리읽기": {
                                                rich_text:[
                                                        {
                                                                text: 
                                                                        {
                                                                        content: "페이지 읽고 회의 준비) \n회의록 읽어오기) "
                                                                }
                                                }       
                                                         
                                                ]
                                        }
                                        
                                },
                                children: children
                                })
                        console.log(response)
                        console.log("Success! Entry added.")
                } catch (error) {
                        console.error(error.body)
                }
        }

        async function userList(){
                try{

                        (async () => {
                                const response = await notion.users.list();
                                console.log(response);
                        })();
                } catch(error){
                        console.error(error.body)
                }
        }

        async function attention(date, attentionDbId) {
                try{
                        const response = await notion.pages.create({
                                parent: { database_id: attentionDbId },
                                properties: {
                                        title: { 
                                                title:[
                                                        {
                                                                "text": {
                                                                        "content": "강은수"
                                                                }
                                                        }
                                                ]
                                        },
                                        "날짜":{
                                                date : {
                                                        // start : now.format('YYYY-MM-DD')
                                                        start : date
                                                }
                                        },
                                        "속성" : {
                                                select : {
                                                        name: "출근"
                                                }
                                        },
                                        "근무 시간" : {
                                                rich_text:[
                                                                {
                                                                type: 'text',
                                                                text: {
                                                                        content: '9:00-12:00\n13:00-18:00',
                                                                },
                                                                },
                                                        ],
                                              
                                        },
                                        // "강은수 서명":{
                                        //         files:[
                                        //                 {
                                        //                         'type':'file',
                                        //                         file: 'sign.png'
                                                                
                                        //                 }
                                        //         ]
                                        // }
                                        
                                }
                        })
                } catch(error){
                        console.error(error.body)
                }
        }

        let  people = [];
        var eunsu = true
        var seung = true
        var bo = true 

        if (eunsu) {
                people.push({id : config.suId})
        }
        if (seung) {
                people.push({id : config.hyeId})
        }
        if (bo){
                people.push({id : config.gyeongId})
        }



        // 회의록 추가
        var theme = " 보경, 승혜가 정리한 가이드북 최종 정리본 보면서 마지막으로 합의하기"

        // var meetingType = "루틴 회의" 
        var meetingType = "안건 회의"    

        // var meetingType = "KPI 체크"

        var preRead = true



        addItem("2023-08-16", theme, meetingType, people, preRead)

        // 글창사 출퇴근 자동화
        // var month = "01" // 한 자리수인 경우 앞에 0 붙여줘야 함
        // var databaseId = "8065049a36944090a2ab13b93763bf66"

        // for (let i = 1; i < 32; i++){
        //         var dateString;
        //         if (i < 10){
        //                 dateString = "2023" + month + "-0" + i.toString()
        //         }
        //         else{
        //                 dateString = "2023" + month + "-" + i.toString()
        //         }
        //         var day = new Date(dateString).getDay()
        //         if (day > 0 && day < 6){
        //                 attention(dateString, databaseId)
        //         }
        // }

        // User ID 출력
        // userList()