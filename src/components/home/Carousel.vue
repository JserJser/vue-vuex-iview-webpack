<template>
    <div style="width:100%;height:260px">
        <Carousel style="width:100%;height:230px" autoplay v-model="value2" loop dots='none'>
        <CarouselItem>
            <div class="demo-carousel">1</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">4</div>
        </CarouselItem>
    </Carousel>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value2: 0
            }
        }
    }
</script>