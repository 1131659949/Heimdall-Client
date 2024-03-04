<template>
  <div class="button-container">
    <p href="#" class="button" id="next">
      加 载 更 多<span></span><span></span>
    </p>
  </div>
</template>

<style scss>
:root {
  --gold: #daa25a;
  --cubic-bezier: cubic-bezier(0.2, 0.3, 0.25, 0.9);
  --body-dark: #333e48;
}

.button-container {
  display: flex;
  justify-content: center;
}
.button {
  position: relative;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.4;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 4px;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  transition: all 0.2s var(--cubic-bezier) 0s;
  color: var(--gold);
  display: inline-flex;
  margin: 0;
  padding: 0.875em 1.428571429em;
  letter-spacing: 0.3em;

  &::after {
    content: "";
    width: 80%;
    left: 50%;
    height: 1px;
    bottom: 0;
    transform: translatex(-50%);
    transition: width 0.2s var(--cubic-bezier) 0.4s,
      background 0.2s var(--cubic-bezier) 0s;
    display: block;
    position: absolute;
    background: var(--gold);
  }

  span {
    display: block;
    position: absolute;
    transition: all 0.2s var(cubic-bezier);
    width: 100%;
    top: 0;
    left: 0;

    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      background: var(--gold);
      transition: transform 0.2s var(--cubic-bezier);
    }

    &:first-child {
      height: 100%;

      &::before,
      &::after {
        width: 1px;
        height: 100%;
        bottom: 0;
        transform: scale3d(1, 0, 1);
        transform-origin: bottom center;
        transition: transform 0.2s var(--cubic-bezier) 0.2s,
          background 0.2s var(--cubic-bezier) 0s;
      }
      &::before {
        left: 0;
      }
      &::after {
        right: 0;
      }
    }

    &:last-child {
      width: 100%;
      height: 1px;

      &::before,
      &::after {
        height: 1px;
        width: 100%;
        bottom: 0;
        transform: scale3d(0, 1, 1);
        transition: transform 0.2s var(--cubic-bezier) 0s,
          background 0.2s var(--cubic-bezier) 0s;
      }
      &::before {
        left: 0;
        transform-origin: bottom left;
      }

      &::after {
        right: 0;
        transform-origin: bottom right;
      }
    }
  }

  &:hover {
    opacity: 1;
    outline: 0;
    color: var(--body-dark) !important;
    text-decoration: none;
    transition: color 0.2s var(--cubic-bezier) 0s;

    &::after {
      width: 100%;
      background: #232f39;
      transition: width 0.2s var(--cubic-bezier) 0s,
        background 0.2s var(--cubic-bezier) 0s;
    }

    span {
      &:first-child {
        &::before,
        &::after {
          transform: scale3d(1, 1, 1);
          background: #232f39;
          transition: transform 0.2s var(--cubic-bezier) 0.2s,
            background 0.2s var(--cubic-bezier) 0s;
        }
      }

      &:last-child {
        &::before,
        &::after {
          transform: scale3d(1, 1, 1);
          background: #232f39;
          transition: transform 0.2s var(--cubic-bezier) 0.4s,
            background 0.2s var(--cubic-bezier) 0s;
        }
      }
    }
  }
}
</style>
