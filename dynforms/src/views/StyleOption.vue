<template>
    <div class="styleopt">
    <!-- Desktop -->
    <div class="container desktop">
        <div class="quest">
        <h1>Do you want to create forms as
        <span class="blank" v-show="!ccActive && !dmActive">
            ?
        </span> 
        <span class="fadeintext" v-show="ccActive">
        Completely Customizable?
        </span>
        <span class="fadeintext" v-show="dmActive">
        Dynamic Mode?
        </span>
        </h1>
        </div>
    <div class="row justify-content-around">
        <div class="col-4">
        <router-link class="routerlink" tag="a" to="/custom">
            <div @mouseover="mouseOverCC" @mouseleave="mouseLeave" class="card bg-dark" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Completely Customizable</h5>
                <!-- <p class="card-text">Completely Customizable</p> -->
            </div>
            </div>
            </router-link>
        </div>
        <div class="col-4">
        <router-link class="routerlink" tag="a" to="/easy">
            <div @mouseover="mouseOverDM" @mouseleave="mouseLeave" class="card bg-dark" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Dynamic Mode</h5>
                <!-- <p class="card-text">Dynamic Mode</p> -->
            </div>
            </div>
            </router-link>
        </div>
    </div>
    </div>
    <!-- Desktop End -->
    <!-- Mobile -->
    <div class="container mobile">
        <div class="quest">
            <h1>How do you prefer to create your forms?</h1>
        </div>
    <div class="row justify-content-center">
        <div class="col-sm mt-5">
        <router-link class="routerlink" tag="a" to="/custom">
            <div @mouseover="mouseOverCC" @mouseleave="mouseLeave" class="card bg-dark" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Completely Customizable</h5>
                <!-- <p class="card-text">Completely Customizable</p> -->
            </div>
            </div>
            </router-link>
        </div>
        <div class="col-sm mt-5">
        <router-link class="routerlink" tag="a" to="/easy">
            <div @mouseover="mouseOverDM" @mouseleave="mouseLeave" class="card bg-dark" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Dynamic Mode</h5>
                <!-- <p class="card-text">Dynamic Mode</p> -->
            </div>
            </div>
            </router-link>
        </div>
    </div>
    </div>
    <!-- Mobile End -->
    </div>
</template>

<script>
export default {
    name: 'StyleOptions',
    components: {

    },
    data() {
        return {
            ccActive: false,
            dmActive: false,
        }
    },
    methods: {
        mouseOverCC: function(){
            this.ccActive = true;
            this.dmActive = false;
        },
        mouseOverDM: function(){
            this.dmActive = true;
            this.ccActive = false;
        },
        mouseLeave: function(){
            this.ccActive = false;
            this.dmActive = false;
        }
    }
}
</script>

<style lang="scss" scoped>

.styleopt {
    position: relative;
}

.desktop {
    display: block;
}

.mobile {
    display: none;
}

.quest {
    margin-top: 50px;
    text-align: center;
    h1{
        font-family: 'Roboto', sans-serif;
    }
}

.routerlink {
    position: relative;
    top: 100px;
    left: 0%;
    text-decoration: none;
    h5 {
        color: white;
    }
}

.card {
    cursor: pointer;
}

.blank {
    border-bottom: 1px solid black;
    padding-left: 250px;
}

.fadeintext {
    color: green;
    text-transform: none;
    animation: fadein 2s;
    -moz-animation: fadein 2s; /* Firefox */
    -webkit-animation: fadein 2s; /* Safari and Chrome */
    -o-animation: fadein 2s; /* Opera */
}

@keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-moz-keyframes fadein { /* Firefox */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-webkit-keyframes fadein { /* Safari and Chrome */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-o-keyframes fadein { /* Opera */
    from {
        opacity:0;
    }
    to {
        opacity: 1;
    }
}

@media screen and (max-width: 768px) and (orientation: portrait) {
.desktop {
    display: none;
}

.mobile {
    display: block;
}

.quest {
    margin-top: 10px;
    text-align: center;
    h1{
        font-family: 'Roboto', sans-serif;
    }
}

.routerlink {
    position: relative;
    top: 100px;
    left: 0%;
    text-decoration: none;
    h5 {
        color: white;
    }
}

@media screen and (max-width: 768px) and (orientation: landscape) {
.desktop {
    display: none;
}

.mobile {
    display: block;
}

.quest {
    margin-top: 10px;
    text-align: center;
    h1{
        font-family: 'Roboto', sans-serif;
    }
}

.routerlink {
    position: relative;
    top: 100px;
    left: 0%;
    text-decoration: none;
    h5 {
        color: white;
    }
}

}
}
</style>