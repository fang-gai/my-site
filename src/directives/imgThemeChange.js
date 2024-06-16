export default function (el, binding) {
  if (binding.value.isDark) {
    el.src = binding.value.url.darkImg;
  } else {
    el.src = binding.value.url.lightImg;
  }
}
