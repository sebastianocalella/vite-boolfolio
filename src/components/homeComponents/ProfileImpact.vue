<template>
    <div class="container my-5">
        <div class="row justify-content-evenly align-items-start">
            <div class="col-4 profile-impact">
                <h1 class="py-3 text-start">Sebastiano Calella</h1>
                <h2 class="py-3 text-end">Full-Stack Web Developer</h2>
            </div>
            <div class="col-4 profile-skills">
                <h3 class="py-3 text-start">My ambient:</h3>
                <ul class="py-3 row justify-content-around">
                    <li class="col-3 my-3">JS</li>
                    <li class="col-3 my-3">php</li>
                    <li class="col-3 my-3">html</li>
                    <li class="col-3 my-3">CSS</li>
                    <li class="col-3 my-3">JS</li>
                    <li class="col-3 my-3">CSS</li>
                    <li class="col-3 my-3">JS</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ProfileImpact',
}

</script>

<style lang="scss" scoped>
.profile-impact{
    padding: 65px 35px;
    border-radius: 50px;
    background: #ffffff;
    box-shadow:  -9px 9px 40px #8f8f8f, 9px -9px 40px #ffffff;
    
}
.profile-skills{
    margin-top: 130px;
    padding: 65px 35px;
    border-radius: 50px;
    background: #ffffff;
    box-shadow: inset -9px 9px 40px #8f8f8f,
            inset 9px -9px 40px #ffffff;
}
</style>