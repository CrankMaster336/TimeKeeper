/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize(function(){
    console.log("I am ready");
});

$(document).ready(function(){
    //sidebar('.sidebar-content');
    /***************/
    /* Global Vars */
    /***************/
    var siderBarOpen = false;
    /***************/
    /*  GUI LOGIC  */
    /***************/
    $('#clock').simpleClock();
    
    $('.sidebar-bar').click(function(){
        if(siderBarOpen){
            $('.sidebar').animate({left: "-250px"}, 100);
            siderBarOpen = false;
        }else{
            $('.sidebar').animate({left: "0px"}, 100);
            siderBarOpen = true;
        }
    });
    var i = 0;
    var isOpen = false;
    var firstDoing = true;
    $('#NewDoing').click(function () {
        var currentTime = new Date();
        var year = currentTime.getFullYear();
        var month = currentTime.getMonth();
        var day = currentTime.getDay();
        var hour = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        if(!isOpen){
            i++;
            if(firstDoing){
                var fullList = $('#DoingList').html();
                fullList = '<div class="doing-item" id="doing-item'+ i +'"  timeInfo="' + currentTime + '"><div id="name'+ i +'"><input type="text" name="doingTime" id="saveName"></div><span>' + hour + ':' + minutes + ':' + seconds + ' -</span><div id="clock"><div id="time2">' + hour + ':' + minutes + ':' + seconds + '</div></div><div id="save">Save</div></div>' + fullList;
                $('#DoingList').html(fullList);
                isOpen = true;
                firstDoing = false;
            }else{                
                var lowwerI = i - 1;
                var fullList = $('#DoingList').html();
                var listItem = $('#doing-item' + lowwerI).html();
                var clockItem = $('#doing-item' + lowwerI + '> #clock > #time2').html();
                clockItem = clockItem.replace("</span><span>", ""); 
                clockItem = clockItem.replace("</span><span>", ""); 
                clockItem = clockItem.replace("</span>", ""); 
                clockItem = clockItem.replace("<span>", ""); 
                fullList = '<div class="doing-item" id="doing-item'+ i +'"  timeInfo="' + currentTime + '"><div id="name'+ i +'"><input type="text" name="doingTime" id="saveName"></div><span>'+ clockItem +'-</span><div id="clock"><div id="time2">' + hour + ':' + minutes + ':' + seconds + '</div></div><div id="save">Save</div></div>' + fullList;
                $('#DoingList').html(fullList);
                console.log(clockItem);
            }
        }

    });

    $(document).on("click", '#save', function () {
        var saveName = $('#saveName').val();
        if(saveName != ""){
            $('#name' + i).html('<p class="doing-item--name">' + saveName + '</p>');
            $('#save').html('');
            isOpen = false;
        }
    });
    
    
    /***************/
    /*  Functions  */
    /***************/
    
    /*function sidebar(elem){
        /***************/
        /* Global Vars */
        /***************//*
        var divMax = -249;
        var divMin = -200;
        
        $( elem ).draggable({ axis: "x", containment: ".sidebar", scroll: false });
        $( elem ).mouseup(function() {
            var divpos = $(elem).offset();
            var divPosLeft = divpos.left;
            var divPosTop = divpos.top;

            if(divPosLeft > divMax && divPosLeft < divMin){
                $(elem).animate({left: "0px"}, 50, function(){
                    console.log('I am Closed' + divMin);
                    divMax = -249;
                    divMin = -200;
                });
            }else{
                $(elem).animate({left: "250px"}, 50, function(){
                    console.log('I am Open' + divMin);
                    divMax = -249;
                    divMin = -30;
                });
            }
        });
    }*/
    
    function getTime(){
        var timeStamp = Math.floor(Date.now());
    }
});