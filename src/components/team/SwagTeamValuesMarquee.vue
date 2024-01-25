<template>
    <div class="values--container">
        <div class="values--row">
            <div class="values--pill">
                <p>Research</p>      
            </div>
            <div class="values--pill">
                <p>Accessibility</p>      
            </div>
            <div class="values--pill">
                <p>Mostly Slaying</p>      
            </div>
            <div class="values--pill">
                <p>Design System</p>      
            </div>
            <div class="values--pill">
                <p>Visual Design</p>      
            </div>
        </div>
        <div class="values--row">
            <div class="values--pill">
                <p>UX Writing</p>      
            </div>
            <div class="values--pill">
                <p>Information Architecture (IA)</p>      
            </div>
            <div class="values--pill">
                <p>Prototyping</p>      
            </div>
            <div class="values--pill">
                <p>Motion Design</p>      
            </div>
        </div>
        <div class="values--row">
            <div class="values--pill">
                <p>Interaction Design (IxD)</p>      
            </div>
            <div class="values--pill">
                <p>UI Design</p>      
            </div>
            <div class="values--pill">
                <p>Daydreaming</p>      
            </div>
            <div class="values--pill">
                <p>Concepts</p>      
            </div>
            <div class="values--pill">
                <p>Videography</p>      
            </div>
        </div>
        <div class="values--row">
            <div class="values--pill">
                <p>Test</p>      
            </div>
            <div class="values--pill">
                <p>Test</p>      
            </div>
            <div class="values--pill">
                <p>Wireframing</p>      
            </div>
            <div class="values--pill">
                <p>Photography</p>      
            </div>
            <div class="values--pill">
                <p>Test</p>      
            </div>
        </div>
    </div>
  </template>

  
<style lang="scss">
.values--container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    overflow-x: hidden;
    position: relative;
}
.values--container:before {
        background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
        width: 100px;
        height: 208px;
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        z-index: 10;
}
.values--container:after {
        background: linear-gradient(-90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
        width: 100px;
        height: 208px;
        position: absolute;
        content: "";
        right: 0;
        z-index: 10;
}
.values--row {
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    gap: 32px;
    flex-wrap: wrap;
    animation: marquee 32s linear infinite running;
    white-space: nowrap;
    will-change: transform;
    transform-style: preserve-3d;
}
.values--row:hover {
    animation-play-state: paused;
}
.values--pill {
    display: inline-flex;
    padding: 0px 32px;
    justify-content: center;
    align-items: center;
    border-radius: 158px;
    border: 4px solid #094785;
    background: #FFF;
    height: 36px;
    transition: all .2s ease;

    &:hover {
        border: 4px solid #0080ff;
        cursor: pointer;
    }

    p {
        color: #1E293B;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: 0.08px;
    }
}

.values__fade--left {
  width: 100px;
  height: 208px;
  position: absolute;
  background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
  z-index: 10;
  margin-top: 0px;
}
@media (prefers-color-scheme: dark) { 
    .values__fade--left {
    background: linear-gradient(90deg, #1a1f26 0%, rgba(26, 31, 38, 0) 100%);
    }
  }
.values__fade--right {
  width: 180px;
  height: 208px;
  position: absolute;
  background: linear-gradient(-90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
  z-index: 10;
  right: 0;
  margin-top: 0px;
}
  @media (prefers-color-scheme: dark) { 
    .values__fade--right {
    background: linear-gradient(-90deg, #1a1f26 0%, rgba(26, 31, 38, 0) 100%);
    }
}

@keyframes marquee {
    0% {
    transform: translateX(0);
    }
    100% {
    transform: translate(-50%);
    }
}
</style>